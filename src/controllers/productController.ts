import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const newProduct = await this.productService.createProduct(name, amount);
    return res.status(201).json(newProduct);
  }

  async getAllProduct(req: Request, res: Response): Promise<Response> {
    const products = await this.productService.getAllProduct();
    return res.status(200).json(products);
  }
}

export default ProductController;
