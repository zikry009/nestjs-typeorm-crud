export class UpdateUserDto {
    @IsOptional()
    @IsString({ message: 'Name must be a string' })
  name?: string;
  email?: string;
}