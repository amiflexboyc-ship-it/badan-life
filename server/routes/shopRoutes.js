import express from 'express';
import { getShopItems, purchaseItem } from '../controllers/shopController.js';

const router = express.Router();

router.get('/', getShopItems);
router.post('/buy', purchaseItem);

export default router;
