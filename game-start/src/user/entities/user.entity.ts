
import { Post } from '@nestjs/common/decorators';
import { BaseEntity } from 'src/utils/baseentity';
import { Entity, Column, OneToOne, ManyToMany, ManyToOne, JoinColumn} from 'typeorm';
import { Profile } from './profile.entity';

@Entity('user')
export class User extends BaseEntity{
    @Column(
      {
        type:"varchar"
      }
    )
    firstName: string;
  
    @Column(
      {
        type:"varchar"
      }
    )
    lastName: string;
  
    @Column(
      {
        type:"varchar"
      }
    )
    email: string;

    @Column(
      {
        type:"varchar"
      }
    )
    password: string;
    @Column(
      {
        name:'age',
        type:"varchar",
      }
    )
    age: string;
    @Column(
      {
        name:'gender',
        type:"varchar",
      }
    )
    gender: string;
    
    @OneToOne(type => Profile, profile => profile.user)
    profile: Profile;


    // @ManyToOne(type => Feed, feed => feed.user.id)
    // feed: Feed;

}