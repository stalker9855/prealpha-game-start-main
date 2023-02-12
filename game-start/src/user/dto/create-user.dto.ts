import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsString({message:"firstName is not a string"})
    @Length(1,40)
    readonly  firstName: string;
  
    @IsString({message:"lastName is not a string"})
    @Length(1,40)
    readonly  lastName: string;
  
    @IsEmail()
    @IsNotEmpty({message:"email is empty"})
    readonly  email: string;
  
    @IsString({message:"password is not a string"})
    @Length(8,40)
    readonly  password: string;

    @IsString({message:"age is not a string"})
    @Length(1,10)
    readonly age: string;

    @IsString({message:"gender is not a string"})
    @Length(4,6)
    readonly gender: string;
}
