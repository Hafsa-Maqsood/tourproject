import express from 'express';
import { createReview, getReviews} from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// POST route to create a review for a specific tour
router.post('/:tourId', verifyUser, createReview);

// GET route to fetch reviews for a specific tour
router.get('/:tourId', getReviews);

export default router;
