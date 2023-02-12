import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentController } from "../controllers/comment.controller";
// import { FeedController } from "../controllers/feed.controller";
import { PostController } from "../controllers/post.controller";
import { Comment } from "../entities/comment.entity";
//import { Feed } from "../entities/feed.entity";
import { Post } from "../entities/post.entity";
import { CommentService } from "../service/comment.service";
//import { FeedService } from "../service/feed.service";
import { PostService } from "../service/post.service";


@Module({
    controllers: [PostController, CommentController],
    providers: [ PostService, CommentService],
    imports: [TypeOrmModule.forFeature([Post, Comment])]
    
})

export class PostModule{

}