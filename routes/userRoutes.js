const express = require('express');
const router = express.Router();

// Local Module
const { validateRegister, validateLogin } = require('../validators/authValidators');
const validation = require('../middlewares/validation');
const { registerController, loginController } = require('../controllers/authControllers');

// Create User
router.post('/create-user', validateRegister, validation, registerController );

// Login User
router.post('/login', validateLogin, validation, loginController)



module.exports = router;