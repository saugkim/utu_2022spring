deployed using heroku at

https://phonebook-backend-test-app.herokuapp.com/

https://phonebook-backend-test-app.herokuapp.com/api/persons/


Tag: Node Express Heroku MongoDB  


**phonebook-back app**  
server side code using Node.js as a development environment with Express  
visual studio code with REST client plugin  

functionalities:
  - fetching, adding, deleting, . . .

```
npm init 

node index.js

------
npm install express --save
"dependencies" : {
  "express": "^4.16.2"
}

-----
npm install --save-dev nodemon
"devDependencies" : {
  "nodemon": "^1.13.3"
}

node_modeuls/.bin/nodemon index.js
"scripts" : {
  "start" : "node index.js",
  "watch" : "nodemon index.js"
  ....
}
npm start (need restart after code changes)
npm run watch (auto restart)

```


