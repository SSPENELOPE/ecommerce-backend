## Ecommerce Backend 

## What is this?
- This is backend application using a combination of routes, sequelize, and models to connect everything together necessary to make a complete backend server. 

- Using this application combined with other front end technoligies you can create a complete fullstack web application

- I built this project as part of requirement for my fullstack developer certification as well as a display of my work for future employers

## Installation
- To use this application you will need to have node.js installed on your device, you can download it at "https://nodejs.org/en/", I recommend version 16.17.

- Once installed, you will need to run a couple commands in your terminal
- Run "npm i", which will install all the packages neccessary to run this application

- You will also need to create your own .env file as mine is not uploaded here as it uses my own login credentials. It should look similar to this 
DB_NAME='ecommerce_db'
DB_USER=''
DB_PASSWORD=''
Obviously the user and password is your own credentials

## Usage
- To use this you will need to run a few more commands in your terminal, run 
"mysql -u username -p", put your env user information where is says "username", then run "source db/schema.sql", final you can run "exit"

- You will then need to source your seed files. To do this in the terminal run "node seeds/index.js"

- Our application is ready to use from here, to start your application run "npm run watch", this uses nodemon to run our server. Dont worry if you make changes to the file, nodemon will automaticaly restart it for us so you do not need to stop and start your server every time changes are made

- To start testing the routes and data returned you can use any application that test routes such as insomnia or postman

- You can watch the video on how to use this application at "coming soon"

## Credits
- The UofM Coding Bootcamp for the starting code

- All the awesome assistants over at askBCS for helping me when I got stuck and could not figure something out





