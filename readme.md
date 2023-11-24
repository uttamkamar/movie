# Movie Search App

This is a simple web application built with Node.js, Express, and MySQL to search for movies, view search results, and save favorite movies.

## Features

- **Search for Movies:** Enter a search term to find movies and TV shows using the OMDB API.
- **View Search Results:** See a list of search results with details such as title, year, and type.
- **Save Favorites:** Save your favorite movies to view them later.
- **View Favorites:** Browse all your saved favorite movies.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/uttamkamar/movie.git

2. Install dependencies:

```bash
   npm install

   ```
3. **Set up MySQL database**:

   - Create a database named movie_app.
   - Import the SQL schema from database-schema.sql to create the necessary table.

4. **Get OMDB API Key**:

    - Register for a free API key on OMDB API.
    - Update the omdbApiKey variable in app.js with your API key.

5. Start the server:

```bash
   node app.js
   ```

6. Open your browser and go to http://localhost:3000 to use the application.

## Folder Structure

    - views/: Contains EJS templates for rendering HTML pages.
    - public/: Holds static assets like stylesheets and images.
    - styles/: Contains custom CSS styles.
    - app.js: Main entry point for the Express application.
    - database-schema.sql: SQL schema for creating the MySQL table.

## Technologies Used
    - Node.js
    - Express
    - MySQL
    - Bootstrap 5
