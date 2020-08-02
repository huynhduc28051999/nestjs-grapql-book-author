import { ObjectType, Field } from 'type-graphql'
import { Post } from '../Posts/Post.entity';
import { Entity, Column, OneToMany, ObjectIdColumn } from 'typeorm';

@ObjectType()
@Entity('author')
export class Author{
  @Field()
  @ObjectIdColumn()
  id: string;
  
  @Field()
  @Column()
  firstName?: string;

  @Field()
  @Column()
  lastName?: string;

  @Field(() => [Post])
  @OneToMany(() => Post, p => p.author)
  posts: Promise<Post[]>;
}