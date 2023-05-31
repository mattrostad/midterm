/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/json', (req, res) => {
  console.log("wat up")
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
let todos = []

 router.get("/", function (req, res){
  console.log("hello")
  res.json(todos)
 });

 router.post("/todos", function (req,res){
  if(!req.body.title){
    res.status(400).json({error: 'Invalid request: todo title missing'})
   return;
 }

const newTodo = {
  title: req.body.title,
  completed: req.body.completed || false
};

todos.push(newTodo);
 console.log(todos)
res.status(200).json({message: 'Todo added successdully', todo: newTodo});
})

module.exports = router;
