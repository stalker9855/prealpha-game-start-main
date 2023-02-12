import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, Length } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString({message:"firstName is not a string"})
    @Length(1,40)
    @IsOptional()
    firstName: string;
  
    @IsString({message:"lastName is not a string"})
    @Length(1,40)
    @IsOptional()
    lastName: string;
  
    @IsString({message:"password is not a string"})
    @IsOptional()
    password: string;

    @IsString({message:"age is not a string"})
    @IsOptional()
    @Length(1,3)
    age: string;

    @IsString({message:"gender is not a string"})
    @IsOptional()
    @Length(4,6)
    gender: string;
}
