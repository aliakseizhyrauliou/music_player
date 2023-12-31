import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { HashingService } from './service/hashing/hashing.service';
import {UserService} from "../user/service/user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArtistEntity} from "../artist/entity/artist.entity/artist.entity";
import {UserEntity} from "../user/entity/user.entity/user.entity";
import {UserConfirmationTokenEntity} from "./entity/userConfirmationToken.entity";
import {ConfirmationTokensService} from "./service/auth/confirmation.tokens.service";
import { MailService } from 'src/mail/service/mail/mail.service';

@Module({
  imports: [TypeOrmModule.forFeature(
    [UserEntity, UserConfirmationTokenEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService, 
    HashingService, 
    UserService, 
    ConfirmationTokensService, 
    MailService]
})
export class AuthModule {}
