# Bookstore API

## Description

The Bookstore API is a RESTful service designed to manage a collection of books, allowing users to perform CRUD operations on books stored in a database. This service is built using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

## Technologies Used

- **NestJS:** A framework for building Node.js server-side applications.
- **MongoDB:** A NoSQL database used to store the book data.
- **Mongoose:** An ODM (Object Document Mapping) library for MongoDB and Node.js.
- **Swagger:** An open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful web services.

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/DFanso/book-store.git
   ```

2. Navigate to the project directory:

   ```
   cd bookstore-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the MongoDB service (ensure MongoDB is installed and properly set up on your machine).

5. Copy the `.env.example` file to `.env` and adjust the environment variables to match your setup, particularly the database connection string.

6. Start the application:

   ```
   npm run start
   ```

7. The application should now be running on `http://localhost:9000`. Access the Swagger documentation at `http://localhost:9000/api` for an interactive API documentation and testing interface.
8. Use the Token in Header Authentication

## API Endpoints

### POST v1/books

- Description: Add a new book to the collection.
- Request Body:

  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "year": 2020,
    "genre": "Fiction"
  }
  ```

- Response: HTTP 201 (Created), with the created book object.

### GET v1/books

- Description: Retrieve a list of all books in the collection.
- Response: HTTP 200 (OK), with an array of book objects.
