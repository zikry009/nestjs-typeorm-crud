import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
}
