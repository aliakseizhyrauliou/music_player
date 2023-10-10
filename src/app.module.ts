import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from './artist/entity/artist.entity/artist.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/constans";
import {UserEntity} from "./user/entity/user.entity/user.entity";
import { MailModule } from './mail/mail.module';
import { UserConfirmationTokenEntity } from './auth/entity/userConfirmationToken.entity';
import { dataSourceOptions } from 'db/data-source';
import { SeedModule } from '../db/seed/seed.module';

@Module({
  imports:[
    TypeOrmModule.forRoot(dataSourceOptions),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ArtistModule, AuthModule, UserModule, MailModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
