const express = require('express');
const router = express.Router();

const FoodItem = require('../models/food-items.Model');
const FoodCategory = require('../models/foodCategory.Model');

router.get('/display', async(req, res, next) => {
    try {
        // Get Food-items
        const food_items = await FoodItem.find({});

        // Get Food-category
        const foodCategory = await FoodCategory.find({});

        res.status(200).json({
            food_items,
            foodCategory
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;