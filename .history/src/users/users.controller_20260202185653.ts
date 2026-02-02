import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<object> {
    return this.usersService.createUser(user);
  }
}
