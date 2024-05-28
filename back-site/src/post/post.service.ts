import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDTO } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PostDTO)/*Se eu boto o DTO dá problema e desse jeito tbm*/ {
    const post = this.prisma.post.create({
      data: data,
    });
    return post;
  }
}
