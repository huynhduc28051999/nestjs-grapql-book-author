import { InputType, Field } from "type-graphql";
import { IsNotEmpty, Length } from "class-validator";

@InputType()
export class CreateAuthor {
  @Field()
  @IsNotEmpty({ message: "first Name should not be empty" })
  @Length(1, 80)
  firstName: string;

  @Field()
  @IsNotEmpty({ message: "last Name should not be empty" })
  @Length(1, 80)
  lastName: string;
}