import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constans';
import { MailModule } from './mail/mail.module';
import { dataSourceOptions } from 'db/data-source';
import { SeedModule } from '../db/seed/seed.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    ArtistModule,
    AuthModule,
    UserModule,
    MailModule,
    SeedModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
