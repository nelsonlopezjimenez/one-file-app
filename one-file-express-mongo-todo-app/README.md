# One File Apps

## The goal is to show all the moving parts of an app in just one file
## Later the same app will be converted into a more efficient logical organization
## How to start and Questions
1. cd one-file-express-mongo-todo-app
1. npm start
1. Open package.json file, look at the "scripts" key/value pair.
1. Do you understand the statement: "node ./node_modules/nodemon/bin/nodemon.js index.js" ?
1. What is the difference between "node index.js" and "nodemon index.js" ?
1. Why do you use "require" statements? Are they the same as "import" statements?
1. What is middleware?
1. What is mongoose? how to connect to mongo server?
1. what are the routes? What do you pass to a GET route?
1. What is request/response objects?
1. what is RESTful API?
1. what are the patterns? 
1. Do you understand the statement: "const PORT = process.env.PORT || 5555;"?
1. How do you add new records to a database using express? (Hint: hardcoded, Postman, a Form)
1. How do you restart the express server?
1. What ports can you use?

## Installation steps from scratch
1. App Name: one-file-express-mongo-todo-app
1. Go to ~/Desktop/QUARTER-3/LABS/ : ```cd ~/Desktop/QUARTER-3/LABS/```
1. ```mkdir one-file-express-mongo-todo-app```
1. ```cd one-file-express-mongo-todo-app```
1. INSIDE ~/Desktop/QUARTER-3/LABS/one-file-express-mongo-todo-app
1. ```npm init -y ```(or not flag -y if you want to answer the questions one-by-one);
1. CONTENT NOW: package.json
1. ```touch index.js```
1. CONTENT NOW: index.js and package.json
1. Make sure verdaccio server is up and running.
1. ```npm install express mongoose nodemon ejs```
1. CONTENT NOW: index.js, package.json, package-lock.json, and node_modules folder
1. Edit package.json file to add "scripts" : "node ./node_modules/nodemon/bin/nodemon.js index.js",
1. Edit index.js to add: imports, middleware, mongo config, routes, listening port.
1. run the app by typing "npm start".
1. Make sure mongo daemon (mongod) server is up and running
1. Check all routes using Postman, curl, or a Form
1. Read all the comments and open all the reference links.
