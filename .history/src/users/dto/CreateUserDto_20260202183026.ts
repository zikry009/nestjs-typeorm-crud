

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
