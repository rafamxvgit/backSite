import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }[]>;
}
