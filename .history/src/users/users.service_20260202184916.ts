import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

  /**
   * Creates a new user in the database.
   *
   * @param {CreateUserDto} user - The data transfer object containing user details to be created.
   * @returns {Promise<object>} An object containing status code, message, and the created user data.
   */
  async createUser(user: CreateUserDto): Promise<object> {
    const newUser = await this.userRepository.save(user);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: newUser,
    };
  }

  /**
   * Fetches a user by their ID from the database.
   *
   * @param {number} id - The ID of the user to fetch.
   * @returns {Promise<object>} An object containing status code, message, and the fetched user data.
   */
  async getUserById(id: number): Promise<object> {
    const user = await this.userRepository.findOne({ where: { id } });
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data: user,
    };
  }

  /**
   * Updates a user by their ID in the database.
   *
   * @param {number} id - The ID of the user to update.
   * @param {UpdateUserDto} user - The data transfer object containing user details to be updated.
   * @returns {Promise<object>} An object containing status code, message, and the updated user data.
   */
  async updateUser(id: number, user: UpdateUserDto): Promise<object> {
    const updatedUser = await this.userRepository.update(id, user);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  /**
   * Deletes a user by their ID from the database.
   *
   * @param {number} id - The ID of the user to delete.
   * @returns {Promise<object>} An object containing status code and message.
   */
  async deleteUser(id: number): Promise<object> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.delete(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
