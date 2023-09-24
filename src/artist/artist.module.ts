import { Module } from '@nestjs/common';
import { ArtistController } from './controller/artist/artist.controller';
import { ArtistService } from './service/artist/artist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from './entity/artist.entity/artist.entity';
import { createMap } from '@automapper/core';
import { mapper } from './mapper/mapper';
import { ArtistDto } from './dto/artist.dto/artist.dto';

createMap(mapper, ArtistEntity, ArtistDto);
createMap(mapper, ArtistDto, ArtistEntity);


@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity])],
  controllers:[ArtistController],
  providers:[ArtistService]
})


export class ArtistModule {}
