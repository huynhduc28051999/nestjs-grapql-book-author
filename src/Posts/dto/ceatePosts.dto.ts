import { InputType, Field } from "type-graphql";
import { IsNotEmpty, Length } from "class-validator";

@InputType()
export class createPosts {
  @Field()
  @IsNotEmpty()
  @Length(1,999)
  title: string;

  @Field()
  @IsNotEmpty()
  votes: number;

  @Field()
  @IsNotEmpty()
  authorId: string;
}