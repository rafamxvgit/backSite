import { PostService } from './post.service';
import { PostDTO } from './dto/post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(postData: PostDTO): Promise<{
        id: number;
        usuarioID: number;
        professor: string;
        disciplina: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
