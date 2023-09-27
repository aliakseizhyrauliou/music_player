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
import { UserConfirmationTokenEntity } from './auth/entity/user.confirmation.token.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'Password1',
      username: 'postgres',
      entities: [ArtistEntity, UserEntity, UserConfirmationTokenEntity], // here we have added user enitity in entities array
      database: 'MusicPlayer',
      synchronize: true,
      logging: true,
      migrations: ["../migrations/*{.ts,.js}"],

    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ArtistModule, AuthModule, UserModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
