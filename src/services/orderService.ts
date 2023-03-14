import OrderModel from '../models/orderModel';
import { IOrder } from '../interfaces/orderInterface';
import connection from '../models/connection';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAllOrder(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrder();
    return orders;
  }
}
