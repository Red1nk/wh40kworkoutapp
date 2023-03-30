const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Serve the login.js file
app.get('/login.js', (req, res) => {
  res.sendFile(__dirname + '/public/login.js');
});

// Serve the leaderboard page
app.get('/leaderboard', (req, res) => {
  res.sendFile(__dirname + '/public/leaderboard.html');
});

// Serve the leaderboard.js file
app.get('/leaderboard.js', (req, res) => {
  res.sendFile(__dirname + '/public/leaderboard.js');
});

// Serve the exercises page
app.get('/exercises', (req, res) => {
  res.sendFile(__dirname + '/public/exercises.html');
});

// Serve the exercises.js file
app.get('/exercises.js', (req, res) => {
  res.sendFile(__dirname + '/public/exercises.js');
});

// Serve the nutrition page
app.get('/nutrition', (req, res) => {
  res.sendFile(__dirname + '/public/nutrition.html');
});

// Serve the nutrition.js file
app.get('/nutrition.js', (req, res) => {
  res.sendFile(__dirname + '/public/nutrition.js');
});

// Serve the profile page
app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/profile.html');
});

// Serve the profile.js file
app.get('/profile.js', (req, res) => {
  res.sendFile(__dirname + '/public/profile.js');
});

// Serve the progress page
app.get('/progress', (req, res) => {
  res.sendFile(__dirname + '/public/progress.html');
});

// Serve the progress.js file
app.get('/progress.js', (req, res) => {
  res.sendFile(__dirname + '/public/progress.js');
});

// Serve the settings page
app.get('/settings', (req, res) => {
  res.sendFile(__dirname + '/public/settings.html');
});

// Serve the settings.js file
app.get('/settings.js', (req, res) => {
  res.sendFile(__dirname + '/public/settings.js');
});

// Serve the WorkoutHistory page
app.get('/WorkoutHistory', (req, res) => {
  res.sendFile(__dirname + '/public/WorkoutHistory.html');
});

// Serve the WorkoutHistory.js file
app.get('/WorkoutHistory.js', (req, res) => {
  res.sendFile(__dirname + '/public/WorkoutHistory.js');
});

// Serve the challenges page
app.get('/challenges', (req, res) => {
  res.sendFile(__dirname + '/public/challenges.html');
});

// Serve the challenges.js file
app.get('/challenges.js', (req, res) => {
  res.sendFile(__dirname + '/public/challenges.js');
});

// Serve the handleAddWorkout.js file
app.get('/handleAddWorkout.js', (req, res) => {
  res.sendFile(__dirname + '/public/handleAddWorkout.js');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
