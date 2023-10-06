import express from 'express';
import { getItems, addItem } from '../controller/inventoryController';

const router = express.Router();

router.get('/items', getItems);

router.post('/items', addItem);

export default router;