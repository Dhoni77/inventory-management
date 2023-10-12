import express from 'express';
import InventoryRouter from './inventoryRouter';
import DiscountRouter from './discountRouter';


const router = express.Router();

router.use("/api", InventoryRouter);
router.use("/api", DiscountRouter);

export default router;