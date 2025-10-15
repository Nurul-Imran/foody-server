const { body } = require("express-validator");

// 🧾 Validation for Registration
exports.validateRegister = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please enter a valid email address."),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6, max: 64 })
    .withMessage("Password must be between 8 and 64 characters long."),

  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Location must be between 3 and 100 characters long."),
];

// 🧾 Validation for Login
exports.validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please enter a valid email address."),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6, max: 64 })
    .withMessage("Password must be between 8 and 64 characters long."),
];
