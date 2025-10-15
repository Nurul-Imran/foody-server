const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String,
    required: true
  },
  options: {
    type: [
      {
        type: Map,
        of: String 
      }
    ],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const FoodItem = mongoose.model("food-items", foodItemSchema);

module.exports = FoodItem;
