const express = require('express');
const router = express.Router();

const Menu = require('../models/menu'); 

router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
    try{
        const data = await (Menu.find());
        console.log('Menu data Fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server error"});
    }
})

router.get('/:menuType', async (req, res) => {
    try {
        const menuType = req.params.menuType;
        //enum: ['sweet', 'spicy', 'sour']

        if(menuType == "sweet" || menuType == "spicy" || menuType == "sour"){
            const response = await Menu.find({taste: menuType});
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'Invalid menu type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.put("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedMenuData = req.body;

        const response = await Menu.findByIdAndUpdate(menuId, updatedMenuData, {
            new: true,
            runValidators: true
        })
        if(!response){
            return res.status(404).json({error: 'Menu not found'});
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
        const menuId = req.params.id;
        const response = await Menu.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error: 'Menu not found'});
        }
        console.log('Data Deleted');
        res.status(200).json({message: "Menu deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

module.exports = router;

// Comment Added for testing purspose //