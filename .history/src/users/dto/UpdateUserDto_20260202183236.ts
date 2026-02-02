export class UpdateUserDto {
    @IsOptional()
  name?: string;
  email?: string;
}