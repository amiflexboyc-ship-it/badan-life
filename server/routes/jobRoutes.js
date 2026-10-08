import express from 'express';
import { getJobs, applyJob, workShift } from '../controllers/jobController.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/apply', applyJob);
router.post('/work', workShift);

export default router;
