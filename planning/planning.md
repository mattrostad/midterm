##  FINAL USER STORIES:

1) As Lindsay, I want a registration feature, allowing me to create an account with a unique username and password.

2) As Fatima, I should be able to Register,  Login, Logout and manage my profile without any Issues

3) As Alex, when adding a new item to the TODO list, I should only need to provide the name of the item.

4) As Mark, I should have the ability to view, edit, and delete items from my TODO list.

5) As Dave, the app should move the task that I check off to the completed list

6) As Matt, the ToDo’s I add must get sorted into one of 4 categories:
-Film / Series (To watch)
- Restaurants, cafes, etc. (To eat)
- Books (To read)
- Products (To buy)

7) As Dave, I want to be able to delete old tasks (Set an expiration date on tasks)

8)As a non-logged in user, I cannot create ToDo’s


## Pick out the nouns

nouns === resources
nouns are tables

Nouns:
film
restaurants
books
products

## BUILD ERD


## Routes to interact with the resources
*REST (REpresentational State Transfer - naming convention)

B GET /users
R GET /users/:id
E POST /users/:id
A POST /users
D POST /users/:id/delete   

routes.md

## MVP
* Minimum Viable Product
* What is the minimum feature that a user will find useful

* Minimum Viable Demo (MVD)
* What features can we effectively show off in 5 minutes
* If you're not going to show it, don't build it
* NO "WOULDN'T IT BE COOL IF?"


## Wireframe/Mockup
* Design the front end 
* Anyone on the team can implement the design

planning/wireframe.png

## User Registration and Login
** dont do it!!


**JS

//localhost:3000/login/7
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies -set cookie
  req.session.user_id = req.params.id;


  // or using plain-text cookies - cookie parser - DECIDE WHICH WANT TO USE
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

COPY AND PASTE INTO SERVER

## Tech Choices

* Back end - node, express, postgres
* Front end - HTML, CSS, JS, jQueary


## TO DO ASAP


1. Create a schema for categories
2. Create a schema for todos
3. Create seeds for categories
4. Create seeds for todos
5. create a route that returns json containing list of all todos
6. create a route that can accept a submission and create a new todo
7. APIs must be used to determine the most suitable category for the new smart todo, include a flag for the category 
