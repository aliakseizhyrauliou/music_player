import { Module } from '@nestjs/common';
import { ArtistController } from './controller/artist/artist.controller';
import { ArtistService } from './service/artist/artist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from './entity/artist.entity/artist.entity';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { ArtistDto } from './dto/artist.dto/artist.dto';
import { CreateArtistDto } from './dto/artist.dto/create_artist.dto';
import { TrackEntity } from '../track/entity/track.entity/track.entity';
import { AlbumEntity } from '../album/entity/album.entity/album.entity';
import { AlbumService } from '../album/service/album/album.service';
import { mapper } from '../mapper';
import { AlbumDto } from '../album/dto/album.dto/album.dto';

createMap(
  mapper,
  ArtistEntity,
  ArtistDto,
  forMember(
    (dto) => dto.albums,
    mapFrom((entity) => mapper.mapArray(entity.albums, AlbumEntity, AlbumDto)),
  ),
);

createMap(mapper, ArtistDto, ArtistEntity);

createMap(mapper, AlbumEntity, AlbumDto);
createMap(mapper, AlbumDto, AlbumDto);

createMap(mapper, ArtistEntity, CreateArtistDto);
createMap(mapper, CreateArtistDto, ArtistEntity);

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity, AlbumEntity, TrackEntity])],
  controllers: [ArtistController],
  providers: [ArtistService, AlbumService],
})
export class ArtistModule {}
