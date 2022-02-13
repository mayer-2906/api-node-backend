# API-NODE USERS

## Description

-project to create an api with NodeJS using express and mogodb.

The index.js file can be run with node index.js and run it on port 3030, where you will see star wars characters filtered by weight. Axios is used to make requests.

use the command "npm run dev" to bring up the server and run the project on port 8080.

## ROUTES

to see the users:
http://localhost:8080/users/get

to create a user:
http://localhost:8080/users/create
You must pass a body with the following structure:
{
   name:"Maria",
   email: "user@user.com",
   password: "*****"
}

to delet a user:
http://localhost:8080/users/delete/:id
You must pass a id the user valid

to update a user:
http://localhost:8080/users/update/:id
You must pass a id the user valid and You must pass a body with the following structure:
{
   name:"Maria",
   email: "user@user.com",
   password: "*****"
}

