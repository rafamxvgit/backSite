import { IsEmail, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @IsString()
  curso: string;
  @IsString()
  departamento: string;
  @MinLength(8)
  password: string;
}
