import express from 'express';
import { getDiscounts, addDiscount } from '../controller/discountController';

const router = express.Router();

router.get('/discounts', getDiscounts);

router.post('/discounts', addDiscount);

export default router;