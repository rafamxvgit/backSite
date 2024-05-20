import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
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
