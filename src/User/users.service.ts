import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { MongoRepository } from "typeorm";
// export type User = any;
@Injectable()
export class UsersService {
  private readonly users: User[];
  // constructor(
  //   @InjectRepository(User)
  //   private readonly userRepository: MongoRepository<User>,
  // ){}
  constructor() {
    this.users = [
      {
        id: '1',
        username: 'john',
        password: 'changeme',
      },
      {
        id: '2',
        username: 'chris',
        password: 'secret',
      },
      {
        id: '3',
        username: 'maria',
        password: 'guess',
      },
    ]
  }
  async findOne(username: string): Promise<User | undefined> {
    // return await this.userRepository.findOne({username: username})
    return this.users.find(user => user.username === username)
  }
}