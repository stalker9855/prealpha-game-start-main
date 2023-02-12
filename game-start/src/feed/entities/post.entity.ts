import { BaseEntity } from "src/utils/baseentity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
//import { Feed } from "./feed.entity";
//import { Feed } from "./feed.entity";


@Entity('posts')

export class Post extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    // @ManyToOne(() => Feed, (feed) => feed.posts)
    // feed: Feed;
}