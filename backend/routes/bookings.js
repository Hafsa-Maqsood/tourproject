import express from 'express';
import { createBooking, getBooking, getAllBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';

import { verifyAdmin } from '../utils/verifyToken.js'; 
const router = express.Router();

// POST route to create a review for a specific tour
router.post('/', verifyUser,createBooking);
router.get('/:id',verifyUser, getBooking);
router.get('/', verifyAdmin,getAllBooking);

export default router;