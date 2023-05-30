/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const todoRoutes  = express.Router();


let currentUser = {
  username: "RoyC",
  password: "password"
};

todoRoutes.get('/', (req, res) => {
  res.render('users');
}); 

todoRoutes.post("/login", function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: 'Invalid request: username or password missing' });
    return;
  }

  if (req.body.username !== currentUser.username || req.body.password !== currentUser.password) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  currentUser = {
    username: req.body.username,
    password: req.body.password
  };

  res.status(200).json({ message: 'Login successful' });
});

todoRoutes.post("/logout", function (req, res) {
  // To clear the current user
  currentUser = null;

  res.status(200).json({ message: 'Logout successful' });
});

todoRoutes.put("/profile", function (req, res) {
  if (!currentUser) {
    res.status(401).json({ error: 'Unauthorized: Please login' });
    return;
  }

  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: 'Invalid request: username or password missing' });
    return;
  }

   // to update the user profile
   currentUser.username = req.body.username;
   currentUser.password = req.body.password;
 
   res.status(200).json({ message: 'Profile updated successfully' });
 });
module.exports = todoRoutes;
