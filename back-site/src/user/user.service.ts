import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	
	constructor (private readonly prisma: PrismaService) {}
  	
	async create(data: CreateUserDto) {
		const user = this.prisma.user.create({data: data});
		return user;
	}
	
	async findAll() {
		return await this.prisma.user.findMany();
	}
}

