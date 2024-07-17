import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, updateUser, deleteUser, getAllUsers } from '../controllers/usercontroller.js';

router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/update', updateUser)
router.delete('/delete', deleteUser)
router.get('/users', getAllUsers)

export default router