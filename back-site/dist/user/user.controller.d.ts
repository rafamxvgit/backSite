import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
    findUser(name: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        curso: string;
        departamento: string;
    }>;
}
