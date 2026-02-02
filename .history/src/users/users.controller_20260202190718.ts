import { Controller, Param, Post, Get, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<object> {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<object> {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<object> {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<object> {
    return this.usersService.deleteUser(id);
  }
}
