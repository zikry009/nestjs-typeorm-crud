export class CreateUserDto {
    @IsNotEmpty()
  name: string;
  email: string;
}
