import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
    findUser(username: string): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
    deleteUser(username: string): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
    update(username: string, data: UpdateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
}
