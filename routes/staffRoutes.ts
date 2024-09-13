import express from 'express';
import { staffController } from '../controllers/staffControllers';

const router = express.Router();

router.post('/staff', staffController.createStaff);
router.get('/staff/:id', staffController.getStaffDetail);
router.get('/', staffController.getAllStaff);
router.delete('/update/:id', staffController.updateStaff);

export default router;