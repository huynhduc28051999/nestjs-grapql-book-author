import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from '@nestjs/graphql'
import { Post } from '../Post.entity'
import { PostsService } from '../models/PostsService'
import { createPosts } from '../dto/ceatePosts.dto'
import { AuthorsService } from '../../Author/models/AuthorsService'
import { Author } from '../../Author/Author.entity'
@Resolver(of => Post)
export class PostsResolve {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,

  ) {}

  @Mutation(() => Post)
  async addPost(@Args('createPosts') createPosts: createPosts ) {
    return await this.postsService.addPosts(createPosts);
  }

  @ResolveProperty('author', () => Author)
  async getAuthor(@Parent() post){
    const {authorId} = post;
    return await this.authorsService.findOneById(authorId);
  }
}