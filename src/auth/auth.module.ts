import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { HashingService } from './service/hashing/hashing.service';
import {UserService} from "../user/service/user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArtistEntity} from "../artist/entity/artist.entity/artist.entity";
import {UserEntity} from "../user/entity/user.entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, HashingService, UserService]
})
export class AuthModule {}
