import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrder(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT  orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders JOIN Trybesmith.products 
      ON products.order_id = orders.id GROUP BY orders.id`,
    );
    return rows;
  }
}
