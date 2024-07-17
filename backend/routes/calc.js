import { Router } from 'express';
const router = Router();
import { createEmission, getEmission, getALlEmissions } from '../controllers/emissioncontroller.js';

router.post('/', createEmission)
router.get('/', getEmission)
//router.get('/')
export default router