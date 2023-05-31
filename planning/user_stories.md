##  FINAL USER STORIES:


1) As Alex, when adding a new item to the TODO list, I should only need to provide the name of the item.

2) As Mark, I should have the ability to VIEW items from my TODO list.

3) As Steve I should have the ability to EDIT items from my TODO list.

4) As Max, I should have the ability to DELETE items from my TODO list.

5) As Dave, the app should move the task that I check off to the completed list

6) As Matt, the ToDo’s I add must get sorted into one of 4 categories:
-Film / Series (To watch)
- Restaurants, cafes, etc. (To eat)
- Books (To read)
- Products (To buy)

7) As Carter, I should be able to add an item to the list (POST)



-add to do list
-show list of reminders

Todo's (date), 
categories: watch, eat, read, buy)
 users

## Pick out the nouns
nouns === resources
nouns are tables

Nouns:
film
restaurants
books
products

## BUILD ERD


User: name, email, 

Users:-
First Name
Last Name
Password
Email
ID - record ID -

Category:
category_name
ID

Tasks:
category_id
users_id
ID: 
task_name: 
created_date:
 scheduled_date: 
 Completed_date: 
  priority:

 <!-- details_url:
  is_active: -->


- mess with Wolfram to determine criteria for API, can we prepopulate the categories, test out API

## Routes to interact with the resources
*REST (REpresentational State Transfer - naming convention)

B GET /users
R GET /users/:id
E POST /users/:id
A POST /users
D POST /users/:id/delete   

routes.md

## 


