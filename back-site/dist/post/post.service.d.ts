import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PostCreateInput): Promise<{
        id: number;
        usuarioID: number;
        professor: string;
        disciplina: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
