import { Request, Response } from 'express';
import UserService from '../services/userService';
import validateToken from '../middleware/validateToken';

class UserController {
  private userService: UserService;
    
  constructor() {
    this.userService = new UserService();
  }
    
  async createUser(req: Request, res: Response) {
    const { username, vocation, level, password } = req.body;
    const newUser = await this.userService.createUser(username, vocation, level, password);
    const token = validateToken(newUser.username, newUser.id);
    res.status(201).json({ token });
  }
}

export default UserController;
