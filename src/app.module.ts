import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthorsModule } from './Author/author.module';
import { PostModule } from './Posts/posts.module';
import { AuthModule } from './Auth/auth.module';
import { UsersModule } from './User/users.module';
// import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
      'mongodb+srv://duc:duc1234a@cluster0-pvxto.mongodb.net/Author-Posts?retryWrites=true&w=majority',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      useUnifiedTopology: true
    }),
    AuthorsModule,
    AuthModule,
    PostModule,
    UsersModule
  ],
 
})
export class AppModule {}
