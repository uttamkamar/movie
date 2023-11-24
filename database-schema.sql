CREATE DATABASE movie_app;
USE movie_app;

CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year VARCHAR(4),
  type VARCHAR(50),
  poster VARCHAR(255)
);
