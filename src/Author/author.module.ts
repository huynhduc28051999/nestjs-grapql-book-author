import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./Author.entity";
import { Post } from "../Posts/Post.entity";
import { AuthorResolver } from "./resolve/AuthorResolver";
import { AuthorsService } from "./models/AuthorsService";
import { PostsService } from "../Posts/models/PostsService";

@Module({
  imports: [TypeOrmModule.forFeature([Author,Post])],
  providers: [AuthorResolver, AuthorsService, PostsService]
})

export class AuthorsModule {}