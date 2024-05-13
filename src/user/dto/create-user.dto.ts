import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
  name: string;
  email: string;
  number: string;
  createdAt?: Date;
  updatedAt?: Date;
}
