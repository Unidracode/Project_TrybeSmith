import UserModel from '../models/userModel';
import { IUser } from '../interfaces/userInterface';
import connection from '../models/connection';

export default class UserService {
  private userModel: UserModel;
    
  constructor() {
    this.userModel = new UserModel(connection);
  }
    
  async createUser(username: string, vocation: string, level: number, password: string): Promise<
  IUser> {
    const newUser = await this.userModel.createUser(username, vocation, level, password);
    return newUser;
  }
}
