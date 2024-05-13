import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({ createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findByPk(username);
  }

  async update(username: string, updateUserDto: CreateUserDto): Promise<User> {
    await this.userModel.update(updateUserDto, { where: { username } });
    return this.findOne(username);
  }

  async remove(username: string): Promise<void> {
    await this.userModel.destroy({ where: { username } });
  }
}
