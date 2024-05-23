import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
export class UpdateUserDto {
@IsOptional()
  username: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  curso: string;
  @IsOptional()
  @IsString()
  departamento: string;
  @IsOptional()
  @MinLength(8)
  password: string;
}
