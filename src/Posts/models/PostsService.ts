import { Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Post } from '../Post.entity';
import { createPosts } from '../dto/ceatePosts.dto';
@Injectable()
export class PostsService{
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: MongoRepository<Post>,
  ){}
  async findAllByAuthor(id: string): Promise<Post[]> {
    // console.log(id.toString());
    
    return await this.postRepository.find({authorId: id.toString()});
  }
  async addPosts(createPosts: createPosts): Promise<Post> {
    return await this.postRepository.save(createPosts);
  }
  // async upvoteById(id): Promise<Post> {
  //   return
  // }
  
}