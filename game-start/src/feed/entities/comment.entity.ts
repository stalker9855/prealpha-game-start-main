import { BaseEntity } from "src/utils/baseentity";
import {  Column, Entity, ManyToOne } from "typeorm";
import { Post } from "./post.entity";


@Entity('comments')
export class Comment extends BaseEntity{


    @Column({
        type: 'varchar',
    })
    comment: string;
    
    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;
}