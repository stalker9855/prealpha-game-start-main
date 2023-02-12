import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
//import { CreateFeedDto } from '../dto/create-feed.dto';
import { CreatePostDto } from '../dto/create-post.dto';
//import { FeedService } from '../service/feed.service';
//import { Post } from '../entities/post.entity';
//import { FeedService } from '../service/feed.service';
import { PostService } from '../service/post.service';

@Controller('post')
export class PostController {
    
    constructor(private postService: PostService) {}

    @Get()
    getAllPosts(){
        return this.postService.getAllPosts();
    }

    @Get("/:id")
    async getPostById(@Param('id', ParseIntPipe) id: number){
        return await this.postService.getPostById(id);
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createPost(@Body() post: CreatePostDto){
        return await this.postService.createPost(post);
    }
}
