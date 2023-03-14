import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  private orderService: OrderService;
    
  constructor() {
    this.orderService = new OrderService();
  }
    
  async getAllOrder(req: Request, res: Response): Promise<Response> {
    const orders = await this.orderService.getAllOrder();
    return res.status(200).json(orders);
  }
}

export default OrderController;
