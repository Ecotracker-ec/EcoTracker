const express = require('express');
const router = express.Router();
const controller = require('../controllers/EmissionController')

router.post('/', controller.createEmission)
//router.get('/')