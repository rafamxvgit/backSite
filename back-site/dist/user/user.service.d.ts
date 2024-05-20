import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
    }[]>;
}
