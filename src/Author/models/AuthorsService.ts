import { Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Author} from '../Author.entity'
import { MongoRepository } from 'typeorm'
import { CreateAuthor } from '../dto/createAuthor.dto';
@Injectable()
export class AuthorsService{
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: MongoRepository<Author>,
  ){}
  async findOneById(id: string): Promise<Author> {
    return await this.authorRepository.findOne(id);
  }
  async addAuthor(createAuthor: CreateAuthor): Promise<Author> {
    return await this.authorRepository.save(createAuthor);
  }
  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find({});
  }
}