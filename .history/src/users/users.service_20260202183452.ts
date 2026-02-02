import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: CreateUserDto): object {
    const newUser = await this.userRepository.save(user);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: newUser,
    };
  }
}
