![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# PROGRAD LABS | NODE | API - PRO-CELEBRITIES

## Learning Goals

In this exercise, you will learn to work on the following.

- Building a RESTful API.
- Performing CRUD operations.
- Writing API endpoints

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.


## Introduction
Everyone likes celebrities, right? Well, even if you don't, now is your chance to create your own, better, fictional celebrities!
Let's create an Express app with all the basic CRUD actions that will allow the user to create their own celebrities and edit them as they see fit.

The user should be able to:

**1. See the list of celebrities**\
**2. See the details of a celebrity**\
**3. Add new celebrities**\
**4. Update existing celebrities**\
**5. Delete celebrities**


## Instructions

### PROGRESSION #0 | Initialize the project

Setup the project using `npm init`  and add `Express` server.

And you have to install all the dependencies:


```
$ npm install
$ npm install express
$ npm install body-parser
$ npm install cors
$ npm install mongoose
```

Now you are ready to start 🚀


### PROGRESSION #1: The `Celebrity` Model

Once we have generated our Express app, our first step is to create the `Celebrity` model and seed some initial celebrities in our database.

The `Celebrity` model should have:
- `name` - String (like _Tom Cruise, Beyonce, Daffy Duck,_ etc.)
- `occupation` - String (what the celebrity does, why they are famous.  For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
- `catchPhrase` - String (every celebrity needs a good catch phrase.  Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase.  This can be pretty much anything)


### PROGRESSION #2: Listing Our Celebrities

Now that we've got some celebrities in the database, we can start working with them in our Express app. Let's **display a list of all the celebrities**.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/celebrities` |    GET    | Show all celebrities |

### Steps we will follow in this progression:

1. Locate the `/celebrities` GET route in `routes/celebrities.js`.
2. In the route callback:
    - Call the `Celebrity` model's `find` method to retrieve all the celebrities.
    - If there's an error, call the route's `next` function and return the error.
    
### PROGRESSION #3: The Celebrity Details Page

We've got a list of celebrities that displays each of their `name`, but what if we want to see the other details? In our `views/celebrities/index.hbs` view with our list of celebrities, let's add links so that the user can click on any celebrity's name, and go to a page specifically for that celebrity.  On this page, we will show all the details of that celebrity.

Here's the route we will be using:

|     Route     | HTTP Verb |      Description      |
|---------------|-----------|-----------------------|
| `/celebrities/:id` |    GET    | Show a specific celebrity |


### Steps we will follow in this progression:

1. Create the `/celebrities/:id` GET route in `routes/celebrities.js`.
2. In the route callback:
    - Call the `Celebrity` model's `findOne` or `findById` method to retrieve the details of a specific celebrity by its id.
    - If there's an error, call the route's `next` function and return the error.
    
### PROGRESSION #4: Adding New Celebrities

Now that we have a list of celebrities, as well as a personalized details page for each celebrity, let's make it so the user can **add new celebrities to the database**

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
|   `/celebrities`   |   POST    | Send the data from the form to this route to create the celebrity and save to the database  |


### PROGRESSION #5: Deleting Celebrities

Now that we have a list of celebrities, a celebrity details page, and a page to create new celebrities, we only have 2 features left to implement: editing celebrities and deleting them.  Since deleting is simpler, let's start with that.

|        Route         | HTTP Verb |       Description       |
|----------------------|-----------|-------------------------|
| `/celebrities/:id/delete` |   POST    | Delete a specific celebrity |

### Steps we will follow in this progression:

1. Create the `/celebrities/:id/delete` POST route in your `routes/celebrities.js` file
2. In that route's callback:
    - Use the `Celebrity` model's `findByIdAndRemove` method to delete the celebrity by its `id`.
    - If there's an error, call the route's `next` function and return the error
    - If there is no error, redirect to the list of celebrities page.  


### PROGRESSION #6 (Bonus): Editing Celebrities

Final piece of our CRUD puzzle: **editing existing celebrities**.

Here are the routes we will be using:

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
|   `/celebrities/:id`    |   PUT    | Send the data to this route to update and save the celebrity from the database         |


### Steps we will follow in this progression:

1. Create the `/celebrities/:id/edit` GET route in `routes/celebrities.js`.
2. In that route's callback:
    - Call the `Celebrity` model’s `findOne` or `findById` method to retrieve a specific celebrity by its id.
    - If there's an error, call the route's `next` function and return the error.
5. Locate the `/celebrities/:id` PUT route in the `routes/celebrities.js` file.
6. In that route's callback:
    - Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. What were they again? Look back and review if you forgot.)
    - Values for those keys should come from the form submission (`req.body`).
    - Call the `Celebrity` model’s `update` method and use the celebrity's id to specify which celebrity we are updating. Also, use the object you just created with the updated attributes for the celebrity and pass this object into the `update` method as the second argument.
    - If there is an error retrieving that celebrity, call the route's `next` function and return the error
    - If there is no error, redirect back to the list of celebrities.

## Celebrities - Done!

At this point, we have implemented all the basic CRUD actions for the Celebrity model in our app.  Nice work!

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

