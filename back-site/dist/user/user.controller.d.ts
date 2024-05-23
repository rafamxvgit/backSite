import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: CreateUserDto): Promise<{
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
