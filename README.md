# Car App

This is a full stack web application providing users the ability to search for used cars through a variety of query parameters, and options to sort those results. This project was built with MongoDB, ExpressJS, ReactJS, and NodeJS, and is deployed through Netlify at https://used-cars.netlify.app.

# Overview

- [Overview](#overview)
  - [Front-end](#front-end)

    - [Technologies Used](#technologies-used)
    - [Dependencies](#dependencies)
  - [Back-end](#back-end)
    - [Technologies Used](#technologies-used-1)
    - [Dependencies](#dependencies-1)
    - [Authentication](#authentication)
    - [Server and Database](#server-and-database)

## Front-end

### Technologies Used

- [JavaScript](https://www.javascript.com/)
- [Netlify](https://www.netlify.com/) - A free website hosting service

### Dependencies

- [ReactJS](https://reactjs.org/) - A client-side JavaScript library for building interfaces
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [React-Router](https://www.npmjs.com/package/react-router) - A package providing dynamic routing functionality for web apps
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) - A package containing the DOM bindings for react-router

- [React-Select](https://github.com/JedWatson/react-select) - A package providing input control for React.js


## Back-end 

### Technologies Used

- [NodeJS](https://nodejs.org/en/) - An event-driven JavaScript runtime designed to build scalable network applications
- [MongoDB](https://www.mongodb.com/) - A document-oreinted NoSQL database
- [Heroku](https://www.heroku.com/) - A platform providing cloud-based hosting services

### Dependencies

- [ExpressJS](https://expressjs.com/) - A NodeJS framework used for server side development
- [Mongoose](https://www.npmjs.com/package/mongoose) - A MongoDB object modeling tool
- [Cors](https://www.npmjs.com/package/cors) - A package providing cross-origin resource sharing
- [Dotenv](https://www.npmjs.com/package/dotenv) - A module for loading environment variables from a .env file into process.env

### Data

The dataset used in this project was scraped from Craigslist and can be found at https://www.kaggle.com/austinreese/craigslist-carstrucks-data

### Server and Database

The server, database structure, and routes can be found in a separate repository: https://github.com/mazurj20/car-app-backend.
