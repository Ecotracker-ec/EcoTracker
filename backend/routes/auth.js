const express = require('express');
const router = express.Router();
const controller =  require('../controllers/usercontroller')

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)