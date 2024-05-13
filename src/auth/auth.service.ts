import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

interface UserContext {
  username: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const passwordMatch = await bcrypt.compare(pass, user.password);
    if (!user || !passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username };
    const userContext: UserContext = {
      username: user.username,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      ...userContext,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
