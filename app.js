const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mysql = require("mysql");
const app = express();

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie_app",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// OMDB API Key
const omdbApiKey = "beb2cb1d";

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/search", async (req, res) => {
  const searchTerm = req.body.searchTerm;

  try {
    // Make a request to the OMDB API with the provided API key
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${omdbApiKey}`
    );

    // Extract the movie data from the API response
    const movies = response.data.Search;

    // Render the results page with the movie data
    res.render("results", { movies, searchTerm });
  } catch (error) {
    console.error("Error fetching data from OMDB API:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/favorite", (req, res) => {
  const { title, year, type, poster } = req.body;
  const sql =
    "INSERT INTO favorites (title, year, type, poster) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, year, type, poster], (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/favorites", (req, res) => {
  const sql = "SELECT * FROM favorites";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.render("favorites", { favorites: results });
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
