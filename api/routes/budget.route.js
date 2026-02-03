import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { addBudget, getBudgets } from '../controllers/budget.controller.js';

const router = express.Router();

router.post('/', protect, addBudget);
router.get('/', protect, getBudgets);

export default router;