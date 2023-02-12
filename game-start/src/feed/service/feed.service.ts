// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";
// import { CreateFeedDto } from "../dto/create-feed.dto";
// import { Feed } from "../entities/feed.entity";


// @Injectable()
// export class FeedService{

//     constructor(
//         @InjectRepository(Feed) private readonly feedRepositry: Repository<Feed>
//     ){}


//     getAllFeed(){
//         return this.feedRepositry.find();
//     }

//     async getFeedById(id: number): Promise<Feed>{
//         return await this.feedRepositry.findOne({
//             where: {id: id},
//             relations: ['posts']
//         })
//     }

//     async createNewFeed(feed: CreateFeedDto){
//         return await this.feedRepositry.save(feed);
//     }
// }