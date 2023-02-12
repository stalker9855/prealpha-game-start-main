import { IsNotEmpty, Length } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty({message: "The post should have a title"})
    @Length(5, 500)
    title: string;



    @IsNotEmpty({message: "The post should have a description"})
    @Length(10, 2000)
    description: string;

    @IsNotEmpty()
    feedId: number;
}