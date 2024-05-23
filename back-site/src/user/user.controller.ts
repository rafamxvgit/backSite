import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Patch,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.create(userData);
  }

  @Get(':username')
  async findUser(@Param('username') username: string) {
    return await this.userService.findUser(username);
  }

  @Delete(':username')
  async deleteUser(@Param('username') username: string) {
    return await this.userService.deleteUser(username);
  }

  @Patch(':username')
  async update(
    @Param('username') username: string,
    @Body(ValidationPipe) data: UpdateUserDto,
  ) {
    return await this.userService.update(username, data);
  }
}
