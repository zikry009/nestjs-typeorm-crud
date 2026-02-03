import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @IsNotEmpty({ message: 'User ID is required' })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'User ID must be a number' },
  )
  userId: number;
}
