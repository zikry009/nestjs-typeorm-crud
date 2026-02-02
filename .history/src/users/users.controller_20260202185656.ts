import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<object> {
    return this.usersService.createUser(user);
  }
}
