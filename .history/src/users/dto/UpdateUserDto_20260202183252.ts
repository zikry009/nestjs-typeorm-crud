import { IsOptional, IsString, IsEmail } from 'class-validator';
import { IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString({ message: 'Name must be a string' })
    name?: string;
    @IsOptional()
    @IsEmail({}, { message: 'Invalid email address' })
    email?: string;
}
  