import { IsNotEmpty, Length } from "class-validator";

export class CreateCommentDto {

    @IsNotEmpty({message: "The post should have a title"})
    @Length(5, 500)
    comment: string;

    @IsNotEmpty()
    postId: number
}