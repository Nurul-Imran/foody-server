require('dotenv').config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// model 
const User = require("../models/usersModel");


// Register Controller
const registerController = async (req, res, next) => {
  try {
    const { name, email, password, location } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists by this email. Please change email address",
      });
    }

    const enc_Password = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      name,
      email,
      password: enc_Password,
      location,
    });

    return res.status(201).json({
      success: true,
      message: "New user created",
      user,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

// Login Controller
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check existing user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email.",
      });
    }

    // Check password
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } 
    );

    res.status(200).send({
      success: true,
      message: "User Login Successfully",
      token
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = {
  registerController,
  loginController,
};
