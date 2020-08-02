import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  Subscription,
} from '@nestjs/graphql';
import { Author } from '../Author.entity';
import { Post } from '../../Posts/Post.entity';
import { AuthorsService } from '../models/AuthorsService';
import { PostsService } from '../../Posts/models/PostsService';
import { CreateAuthor } from '../dto/createAuthor.dto';
import { PubSub } from 'graphql-subscriptions';
// import { pubSub, payload } from '../subscription/pubSub';

const pubsub = new PubSub();

@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  @Query(() => Author)
  async getAuthor(@Args('id') id: string) {
    return await this.authorsService.findOneById(id);
  }

  @Query(() => [Author])
  async getAllAuthors() {
    return await this.authorsService.findAll();
  }
  // @Mutation(returns => Post)
  // async upvotePost(@Args('postId') postId: string){
  //   return await this.postsService.upvoteById(postId);
  // }

  @Mutation(() => Author)
  async addAuthor(@Args('createAuthor') createAuthor: CreateAuthor) {
    const addAuthor = await this.authorsService.addAuthor(createAuthor);
    pubsub.publish('createAuthor', {createAuthor:  addAuthor})
  }

  @ResolveProperty('posts', () => [Post])
  async getPosts(@Parent() author) {
    const { id } = author;
    return await this.postsService.findAllByAuthor(id);
  }

  @Subscription(() => Author)
  authorAdded() {
    return pubsub.asyncIterator('createAuthor')
  }
}
