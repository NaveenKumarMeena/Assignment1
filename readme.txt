**Table of Contents**
1.Project Structure
2.Dependencies
3.Setting Up the Database
4.Running the Application
5.API Endpoints
6.Sample Requests
7.Error Handling

*Project Structure:

The project consists of the following files and directories:

server.js: The main server file that configures and starts the Express application.
routes/routes.js: Defines the API routes and middleware.
database/db.js: Initializes the database connection.
controller/task.js: Contains the controller functions for handling tasks.
model/task.js: Defines the Task data model using Mongoose.

**API Endpoints:

*POST http://localhost:8000/task
{
  "title": "Task 1",
  "description": "Description of Task 1",
  "status": "Incomplete"
}

response::
{
  "_id": "64faea7bc81e928c7e24bb41",
  "title": "Task 1",
  "description": "Description of Task 1",
  "status": "Incomplete"
}


*GET http://localhost:8000/tasks

response::
[
  {
    "_id": "task_id_1",
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": "Incomplete"
  },
  {
    "_id": "task_id_2",
    "title": "Task 2",
    "description": "Description of Task 2",
    "status": "Complete"
  }
]

*PUT http://localhost:8000/task/64faea7bc81e928c7e24bb41
{
  "status": "Complete"
}

response::
{
  "_id": "task_id_1",
  "title": "Task 1",
  "description": "Description of Task 1",
  "status": "Complete"
}
