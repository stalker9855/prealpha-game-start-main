import { ValidationPipe } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { UsePipes } from "@nestjs/common/decorators/core/use-pipes.decorator";
import { Get, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { Comment } from "../entities/comment.entity";
import { CommentService } from "../service/comment.service";
import { PostService } from "../service/post.service";



@Controller('comment')
export class CommentController {

    constructor(private commentService: CommentService, private postService: PostService) {}


    @Get()
    getAllComments(){
        return this.commentService.getAllComments();
    }



    @Post()
    @UsePipes(ValidationPipe)
    async saveComment(@Body() comment: CreateCommentDto): Promise<Comment>{
        const post = await this.postService.getPostById(comment.postId);
        return await this.commentService.createComment(comment, post);
    }
}