import express from 'express';
import {
  createCharacter,
  getPlayer,
  restPlayer,
  useItem,
  travelLocation,
  bankAction
} from '../controllers/playerController.js';

const router = express.Router();

router.post('/character', createCharacter);
router.get('/stats', getPlayer);
router.post('/rest', restPlayer);
router.post('/use-item', useItem);
router.post('/travel', travelLocation);
router.post('/bank', bankAction);

export default router;
