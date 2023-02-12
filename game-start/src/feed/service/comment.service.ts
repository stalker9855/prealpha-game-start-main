import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReplOptions } from "repl";
import { Repository } from "typeorm";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { Comment } from "../entities/comment.entity";
import { Post } from "../entities/post.entity";

@Injectable()
export class CommentService{

    constructor(@InjectRepository(Comment) private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>){
    }

    getAllComments(){
        return this.commentRepository.find();
    }


    async createComment(comment: CreateCommentDto, post: Post): Promise<Comment>{
        const newComment =  await this.commentRepository.save({
            comment: comment.comment
        });

        post.comments = [...post.comments, newComment];
        this.postRepository.save(post)
        return await newComment;
        
    }
}