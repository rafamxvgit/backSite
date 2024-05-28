import { IsDate, IsString } from "class-validator";
export class PostDTO {
  @IsString()
  professor: string;
  @IsString()
  disciplina: string;
  @IsDate()
  createdAt?: Date | string;
  @IsDate()
  updatedAt?: Date | string;
  autor: UserCreateNestedOneWithoutPostInput; //tendo problemas com essa parte
}
