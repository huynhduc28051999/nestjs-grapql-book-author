import { Resolver } from "type-graphql";
import { User } from "src/User/user.entity";
import { Mutation, Args } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

@Resolver(of => User)
export class AuthResolve {
  constructor(
    private readonly localStrategy: LocalStrategy
  ){}
  @UseGuards(AuthGuard('local'))
  @Mutation(() => User)
  async Login(@Args('username') username: string, @Args('password') password: string){
    return await this.localStrategy.validate(username,password)
  }
}