import { Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import {createMap} from "@automapper/core";
import {UserDto} from "./dto/user.dto/user.dto";
import {UserEntity} from "./entity/user.entity/user.entity";
import {mapper} from "./mapper/mapper";
import {UserSignUpDto} from "./dto/user.dto/user.sign_up.dto";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HashingService} from "../auth/service/hashing/hashing.service";
import { UserController } from './controller/user/user.controller';

createMap(mapper, UserDto, UserEntity);
createMap(mapper, UserEntity, UserDto);
createMap(mapper, UserSignUpDto, UserEntity);
createMap(mapper, UserEntity, UserSignUpDto);
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, HashingService],
  controllers: [UserController]
})
export class UserModule {}
