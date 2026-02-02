export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
  name: string;
  
  email: string;
}
