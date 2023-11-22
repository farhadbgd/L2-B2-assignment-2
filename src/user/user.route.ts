import express from 'express';
import { userControllers } from './user.Controller';

const router = express.Router();

router.post('/api/users', userControllers.createUser);
router.get('/api/users', userControllers.getAllUsers);
router.get('/api/users/:userId', userControllers.getSingleUser);
router.put('/api/users/:userId', userControllers.updateSingleUser);
router.delete('/api/users/:userId', userControllers.deleteSingleUser);

export const usertRoutes = router;
