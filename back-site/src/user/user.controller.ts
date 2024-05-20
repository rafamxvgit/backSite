import { Controller, Body, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  	@Post()
  	async create(@Body() createUserDto: CreateUserDto) {
    	return await this.userService.create(createUserDto); //definir (create) dentro de user.service.ts
	}
	
	@Get()
	async findAll() {
		return await this.userService.findAll();
	}
}
