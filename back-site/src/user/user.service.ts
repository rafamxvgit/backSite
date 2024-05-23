import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({ data: data });
    return user;
  }

  async findUser(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }


  async deleteUser(username: string) {
	return await this.prisma.user.delete({
		where: {
			username: username,
		},
	});
  }

  async update(username: string, data: UpdateUserDto) {
	return await this.prisma.user.update({
		where: {
			username: username
		},
		data: data,
	})
	}
}