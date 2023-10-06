import express from 'express';
import InventoryRouter from './inventoryRouter';


const router = express.Router();

router.use("/api", InventoryRouter);

export default router;