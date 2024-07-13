# Project Title

Asynchronous Actions with React-Redux

## About the Project

### Project Overview

This project demonstrates the implementation of asynchronous actions in a React-Redux application. It includes functionality to fetch posts from an API and create new posts, showcasing how to handle API requests and update the Redux store with the retrieved or newly created data.

### Key Features

1. **Fetch Posts:**
   - Fetches a list of posts from a remote API (`https://jsonplaceholder.typicode.com/posts`).
   - Dispatches an action with the type `FETCH_POSTS` and the fetched posts as the payload to update the Redux store.

2. **Create Post:**
   - Allows for the creation of new posts by sending a POST request to the API (`https://jsonplaceholder.typicode.com/posts`).
   - Dispatches an action with the type `NEW_POST` and the created post as the payload to update the Redux store.

### Code Description

The code includes two action creators: `fetchPosts` and `createPost`.

### Technology Stack
React: A JavaScript library for building user interfaces.
Redux: A state management library for JavaScript applications.
Redux Thunk: Middleware that allows writing action creators that return a function instead of an action.
Fetch API: Used for making HTTP requests to fetch data from the API.

### Getting Started
1. Clone the repository.
2. Install dependencies using npm install.
3. Start the application using npm start.
4. The application will fetch and display posts from the API and allow creating new posts.



