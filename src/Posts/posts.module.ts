import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Post} from './Post.entity';
import { PostsResolve } from "./resolve/PostsResolve";
import { PostsService } from "./models/PostsService";
import { Author } from '../Author/Author.entity';
import { AuthorsService } from "src/Author/models/AuthorsService";
@Module({
  imports: [TypeOrmModule.forFeature([Post, Author])],
  providers: [PostsResolve, PostsService, AuthorsService]
})

export class PostModule {}