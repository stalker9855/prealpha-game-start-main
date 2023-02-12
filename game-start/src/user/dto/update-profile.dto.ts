import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, Length } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsString({message:"bio is not a string"})
    @IsOptional()
    @Length(0,1000)
    bio: string;
  
    @IsString({message:"exp is not a string"})
    @IsOptional()
    @Length(0,500)
    exp: string;
  
    @IsString({message:"links are not a string"})
    @IsOptional()
    @Length(0,500)
    links: string;
  
    @IsString({message:"phone is not a string"})
    @IsOptional()
    @Length(0,40)
    phone: string;
}
