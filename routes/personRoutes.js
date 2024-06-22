const express = require('express');
const router = express.Router();

const Person = require('../models/person'); 

router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.get('/:workType', async (req, res) => {
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

router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('Data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('Data Deleted');
        res.status(200).json({message: "person deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

module.exports = router;