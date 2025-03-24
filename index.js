const express = require("express");
const app = express();
const { format } = require('date-fns');


// Middleware for parsing JSON and urlencoded form data


// Logging middleware
app.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use(function(req, res, next) {
  const formatted = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log(formatted); 
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res, next) => {
  if (true) {
    return next(new Error("Something broke!"));
  }
  res.send("Hello World");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Not Implemented!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

