import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };

    return newProduct;
  }

  async getAllProduct(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & 
    RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );

    return products;
  }
}

export default ProductModel;
