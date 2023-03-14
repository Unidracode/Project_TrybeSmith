import { Router } from 'express';
import UserController from '../controllers/userController';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/users', (req, res) => userController.createUser(req, res));

export default userRouter;
