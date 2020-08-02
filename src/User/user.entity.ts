import { ObjectType, Field } from "type-graphql";
import { Entity, ObjectIdColumn, Column,  } from 'typeorm';

@ObjectType()
@Entity('user')
export class User {
  @Field()
  @ObjectIdColumn()
  id: string

  @Field()
  @Column()
  username: string

  @Field()
  @Column()
  password: string
}