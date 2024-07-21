import { Router } from 'express';
const router = Router();
import { createEmission, getEmission, getALlEmissions, getLast12Emissions } from '../controllers/EmissionController.js';
import {authenticateUser} from '../controllers/usercontroller.js'

router.post('/', authenticateUser, createEmission)
router.post('/getEmission', authenticateUser, getEmission)
router.get('/getEmissions', authenticateUser, getLast12Emissions)
//router.get('/')
export default router
