import { ObjectType, Field, Int } from 'type-graphql'
import { Entity, ObjectIdColumn, Column, ManyToOne } from 'typeorm';
import { Author } from './../Author/Author.entity';

@ObjectType()
@Entity('post')
export class Post{
  @Field()
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  votes?: number;
  
  @Field()
  @Column()
  authorId: string;
  
  @Field(() => Author)
  @ManyToOne(() => Author, author => author.posts)
  author: Author;
}