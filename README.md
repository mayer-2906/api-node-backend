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

# Consultas sql

1. Consultar las habilidades por usuario.

SELECT  U.id, U.name, H.id, H.user.id, H.name FROM Usuarios U, Habilidades H  WHERE  (U.id==H.iser_id)

2.  Usuarios donde pueda buscar por el campo name una cadena 

DECLARE @cadena VARCHAR(100); 
SELECT name  FROM Usuarios WHERE CHARINDEX( name, @cadena)

3. De una breve explicacion de por que cree que existe la tabla: habilidades_niveles
  Creo que es una tabla pivote que relaciona las habilidades con los niviles, debido a que pueden haber varios niveles y la tabla habilidades_niveles le asocia a habilidades un nivel.

4. Un usuario cuantas habilidades podría tener:
  b) Un usuario, muchas habilidades

