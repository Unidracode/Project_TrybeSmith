import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();
const orderController = new OrderController();

router.get('/orders', (req, res) => orderController.getAllOrder(req, res));

export default router;
