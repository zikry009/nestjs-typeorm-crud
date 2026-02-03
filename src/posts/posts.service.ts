import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/CreatePostDto';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createPost(post: CreatePostDto): Promise<object> {
    const user = await this.userRepository.findOne({
      where: { id: post.userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newPost = this.postRepository.create({
      ...post,
      users: user,
    });
    const savedPost = await this.postRepository.save(newPost);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Post created successfully',
      data: savedPost,
    };
  }

  async getPostById(id: number): Promise<object> {
    const post = await this.postRepository.findOne({ where: { id } });
    return {
      statusCode: HttpStatus.OK,
      message: 'Post fetched successfully',
      data: post,
    };
  }

  async getAllPosts(title?: string): Promise<object> {
    const query = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.users', 'users');
    if (title) {
      query.andWhere('post.title LIKE :title', { title: `%${title}%` });
    }
    const posts = await query.getMany();
    return {
      statusCode: HttpStatus.OK,
      message: 'Posts fetched successfully',
      data: posts,
    };
  }
}
