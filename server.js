/*var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('greet.txt', 'Hi ' + user.username + '\n', ()=>console.log("File is Created"));*/

/*var notes = require('./notes.js');

console.log(notes.age);
console.log(notes.addToAge(30))*/

/*var _ = require('lodash');
var data = ["person", "person", 1, 2, 1, 2, "name", "age", '2'];
console.log(_.uniq(data));*/

/*"scripts": {
    "server": "nodemon server.js"
}*/

const express = require("express");
const app = express();
const db = require('./db')


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//const Person = require("./models/person");
//const Menu = require("./models/menu");

app.get('/', function(req, res){
    res.send("Helloooooooo, Welcome to my hotel, how can i help u?")
})
/*
app.post('/person', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains person data
        // Create new person usning Mongoose model
        const newPerson = new Person(data);
        // save person data to database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

app.get('/person/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if(workType == "chef" || workType == "manager" || workType == "waiter"){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
*/
/*app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('New menu item saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server error"});
    }
})
app.get('/menu', async (req, res) => {
    try{
        const data = await (Menu.find());
        console.log('Menu data Fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server error"});
    }
})*/

app.post('/items', (req, res) => {
    console.log('Data Recieved');
    res.send('Data saved');
})

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(2000);