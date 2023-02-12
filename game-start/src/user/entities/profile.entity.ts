
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from 'src/utils/baseentity';
import { Entity, Column, OneToOne, JoinColumn} from 'typeorm';

@Entity('profile')
export class Profile extends BaseEntity{
      @Column(
      {
        nullable: true,
        type:"varchar"
      }
    )
      bio: string;

      @Column(
        {
          nullable: true,
          type:"varchar"
        }
      )
      exp: string;

      @Column(
        {
          nullable: true,
          type:"varchar"
        }
      )
      links: string;

      @Column(
        {
          nullable: true,
          type:"varchar"
        }
      )
      phone: string;
       
      @OneToOne(type => User, user => user.profile)
      @JoinColumn()
      user: User;
}