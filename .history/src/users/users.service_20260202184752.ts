import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: CreateUserDto): Promise<object> {
    const newUser = await this.userRepository.save(user);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: newUser,
    };
  }

  async getUserById(id: number): Promise<object> {
    const user = await this.userRepository.findOne({ where: { id } });
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data: user,
    };
  }

  async updateUser(id: number, user: UpdateUserDto): Promise<object> {
    const updatedUser = await this.userRepository.update(id, user);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  async deleteUser(id: number): Promise<object> {
    const user = await this.userRepository.findOne({ where: { id } });
    if
    await this.userRepository.delete(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
