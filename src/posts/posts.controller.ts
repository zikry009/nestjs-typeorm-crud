import { Controller, Param, Get, Query, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePostdto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() post: CreatePostDto): Promise<object> {
    return this.postsService.createPost(post);
  }

  @Get(':id')
  getPostById(@Param('id') id: number): Promise<object> {
    return this.postsService.getPostById(id);
  }

  @Get()
  getAllPosts(@Query('title') title?: string): Promise<object> {
    return this.postsService.getAllPosts(title);
  }
}
