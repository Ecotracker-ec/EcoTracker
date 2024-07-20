import { Router } from 'express';
const router = Router();
import { createEmission, getEmission, getALlEmissions } from '../controllers/EmissionController.js';
import {authenticateUser} from '../controllers/usercontroller.js'

router.post('/', authenticateUser, createEmission)
router.get('/', authenticateUser, getEmission)
//router.get('/')
export default router