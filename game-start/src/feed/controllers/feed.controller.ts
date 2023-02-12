// import { Body, Controller, Get, HttpCode, Post, UsePipes } from "@nestjs/common";
// import { ValidationPipe } from "@nestjs/common/pipes";
// import { FeedService } from "../service/feed.service";


// @Controller('feed')
// export class FeedController{
  
//     constructor(private feedService: FeedService){}

//     // @Post()



//     @Get()
//     getAllFeed(){
//         return this.feedService.getAllFeed()
//     }

//     @Post()
//     @HttpCode(200)
//     @UsePipes(ValidationPipe)
//     async createFeed(@Body() feedData){
//         return await this.feedService.createNewFeed(feedData);
//     }

// }