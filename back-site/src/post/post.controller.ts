import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from './dto/post.dto';
import { Prisma } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() postData: ) {
    return postData;

  }
}