import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, Repository } from "typeorm";
import { CreatePostDto } from "../dto/create-post.dto";
//import { Feed } from "../entities/feed.entity";
import { Post } from "../entities/post.entity";

@Injectable()
export class PostService{
//@InjectRepository(Feed) private readonly feedRepository: Repository<Feed>
    constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>,
    ){
    }

    getAllPosts(){
        return this.postRepository.find();
    }

    async getPostById(id: number): Promise<Post>{
        return await this.postRepository.findOne({
            where: {id:id},
            relations: ['comments']
        });
    }

    async createPost(post: CreatePostDto){
         return await this.postRepository.save(post);
    }

}