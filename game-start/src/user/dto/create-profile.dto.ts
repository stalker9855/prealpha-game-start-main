import {IsString, Length } from "class-validator";

export class CreateProfileDto {
    @IsString({message:"bio is not a string"})
    @Length(0,1000)
    readonly  bio: string;
  
    @IsString({message:"exp is not a string"})
    @Length(0,500)
    readonly  exp: string;
  
    @Length(0,500)
    readonly  links: string;
  
    @IsString({message:"phone is not a string"})
    @Length(0,40)
    readonly  phone: string;
}
