# ExpenseManager_app

This is a simple application for managing personal expenses. The main goal is to help users keep track of their expenses by adding, viewing, editing, and deleting them. This project also serves as a practice for various modern web technologies, including Angular, TypeScript, and Docker.

## Features

- Add, view, edit, and delete expenses.
- Categorize expenses (e.g., Housing, Communication, Food, Transportation).
- View expenses by date.
- Responsive design.
- Unit tests using Jest.
- Containerized with Docker for easy deployment.
- Uses `json-server` to simulate a backend.

## Requirements

- Node.js 21 LTS
- Docker
- Yarn (or npm)

## Tech Stack

- Angular: Frontend framework used for building the user interface.
- TypeScript: Used for type safety and modern JavaScript features.
- Jest: Testing framework used for unit testing the application.
- Docker: Used to containerize the application for consistent deployment.
- CSS: Used for styling the application.
- json-server: Used to create a fake REST API for testing purposes.

## Getting Started

### Clone the project

```bash
git clone git@github.com:ManuelPauloAfonso/ExpenseManager_app.git

``` 
## Access the project directory

```bash
cd ExpenseManager_app
``` 
## Install dependencies

yarn install

# or

npm install

## Start the development server
Start the development server with hot reload at http://localhost:4200.

yarn start

# or

npm start

## Start the JSON Server
This application uses json-server to provide a fake backend for managing expenses. The server will serve data from db.json.

To start the JSON server:

```bash
npx json-server --watch db.json
``` 
This will start the server at [http://localhost:3000](http://localhost:3000), which will serve the fake API endpoints.

## Access the API

You can access the fake API at the following endpoints:

- GET /expenses** - Fetch all expenses.
- POST /expenses** - Add a new expense.
- PUT /expenses/:id** - Update an existing expense.
- DELETE /expenses/:id** - Delete an expense.

## Running Tests

### Run unit tests

To run the unit tests and watch for changes:

```bash
yarn test

# or

npm test

``` 
## Deploy

### Docker - How to Run

#### Build the Docker image:

```bash
docker build -t your-username/expensemanager_app .
``` 
During the build process, the Dockerfile will:

- Install dependencies.
- Install Angular CLI and Jest globally.
- Run the Jest tests to ensure the application is working correctly.
- If the tests pass, the Docker image will be created successfully.
### Run the Docker container
Run the Docker container on port 8080 (First value in the -p parameter maps to the external port):

```bash
docker run -d -p 8080:4200 your-username/expensemanager_app
``` 
Check if the container is running properly:
``` bash
docker ps
``` 
## Sample Data

Here’s an example of the kind of data the application handles:


```json
"expenses": [
  {
    "id": 1,
    "description": "Aluguel",
    "amount": 1200.0,
    "category": "Moradia",
    "date": "2024-07-15"
  },
  {
    "id": 2,
    "description": "Internet",
    "amount": 70.0,
    "category": "Comunicação",
    "date": "2024-07-25"
  }
]
```
This sample data is handled using json-server for local development and testing.

## JSON Server
To facilitate testing and development, this project uses json-server to simulate a backend. json-server serves data from db.json and provides a simple REST API that allows you to perform CRUD operations on expenses.

To start the JSON server, run:

This will start the server at http://localhost:3000. You can use this URL to access your fake API during development.








