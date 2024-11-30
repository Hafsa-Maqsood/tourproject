import express from 'express';
import { updateUser, getAllUser, getSingleUser, deleteUser } from '../controllers/userController.js';

import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';  // Correct import path for both

const router = express.Router();

// update user
router.put('/:id', updateUser);

// delete user
router.delete('/:id', verifyUser, deleteUser);

// get single user
router.get('/:id', verifyUser, getSingleUser);

// get all users
router.get('/', verifyAdmin, getAllUser);

export default router;
