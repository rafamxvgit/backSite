export class PostDTO {
  professor: string;
  disciplina: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  autor: UserCreateNestedOneWithoutPostInput;//tendo problemas com essa parte
};