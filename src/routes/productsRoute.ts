import { Router } from 'express';
import ProductsController from '../controllers/productController';

const router = Router();

const product = new ProductsController();

router.post('/products', (req, res) => product.createProduct(req, res));
router.get('/products', (req, res) => product.getAllProduct(req, res));

export default router;
