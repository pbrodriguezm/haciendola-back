import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, name, email, number } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userModel.create({
      username,
      password: hashedPassword,
      name,
      email,
      number,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findByPk(username);
  }

  async update(username: string, updateUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    await this.userModel.update(
      { ...updateUserDto, password: hashedPassword },
      { where: { username } },
    );
    return this.findOne(username);
  }

  async remove(username: string): Promise<void> {
    await this.userModel.destroy({ where: { username } });
  }
}
