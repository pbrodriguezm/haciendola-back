import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: 'Unauthorized Bearer Auth',
})
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | null> {
    return this.userService.findOne(username);
  }
  @UseGuards(AuthGuard)
  @Put(':username')
  async update(
    @Param('username') username: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.update(username, createUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':username')
  async remove(@Param('username') username: string): Promise<void> {
    return this.userService.remove(username);
  }
}
