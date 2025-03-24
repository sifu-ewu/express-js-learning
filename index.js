const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Express.js learning project');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});