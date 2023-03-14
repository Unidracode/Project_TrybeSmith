import ProductModel from '../models/productModel';
import { IProduct } from '../interfaces/productInterface';
import connection from '../models/connection';

class ProductService {
  constructor(private productModel = new ProductModel(connection)) { }

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.productModel.createProduct(name, amount);
    return newProduct;
  }

  async getAllProduct(): Promise<IProduct[]> {
    const products = await this.productModel.getAllProduct();
    return products;
  }
}

export default ProductService;
