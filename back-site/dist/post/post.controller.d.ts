import { PostService } from './post.service';
import { Prisma } from '@prisma/client';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(postData: Prisma.PostCreateInput): Promise<Prisma.PostCreateInput>;
}
