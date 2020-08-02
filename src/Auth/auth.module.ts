import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/User/user.entity";
import { UsersService } from "src/User/users.service";
import { AuthResolve } from "./auth.resolve";

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [AuthService, LocalStrategy, UsersService,AuthResolve],
})
export class AuthModule {}