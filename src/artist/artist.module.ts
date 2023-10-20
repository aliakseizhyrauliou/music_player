import { Module } from '@nestjs/common';
import { ArtistController } from './controller/artist/artist.controller';
import { ArtistService } from './service/artist/artist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from './entity/artist.entity/artist.entity';
import { createMap } from '@automapper/core';
import { ArtistDto } from './dto/artist.dto/artist.dto';
import { CreateArtistDto } from './dto/artist.dto/create_artist.dto';
import { TrackEntity } from './entity/track.entity/track.entity';
import { TrackDto } from './dto/track.dto/track.dto';
import { AlbumEntity } from '../album/entity/album.entity/album.entity';
import { AlbumService } from '../album/service/album/album.service';
import { mapper } from '../mapper';

createMap(mapper, ArtistEntity, ArtistDto);
createMap(mapper, ArtistDto, ArtistEntity);
createMap(mapper, CreateArtistDto, ArtistEntity);
createMap(mapper, ArtistEntity, CreateArtistDto);
createMap(mapper, TrackEntity, TrackDto);

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity, AlbumEntity, TrackEntity])],
  controllers: [ArtistController],
  providers: [ArtistService, AlbumService],
})
export class ArtistModule {}
