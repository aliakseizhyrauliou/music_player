import { Module } from '@nestjs/common';
import { AlbumController } from './controller/album/album.controller';
import { AlbumService } from './service/album/album.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from '../artist/entity/artist.entity/artist.entity';
import { AlbumEntity } from './entity/album.entity/album.entity';
import { TrackEntity } from '../track/entity/track.entity/track.entity';
import { mapper } from '../mapper';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { AlbumDto } from './dto/album.dto/album.dto';
import { ArtistDto } from '../artist/dto/artist.dto/artist.dto';

createMap(
  mapper,
  AlbumEntity,
  AlbumDto,
  forMember(
    (dto) => dto.artist,
    mapFrom((entity) => mapper.map(entity.artist, ArtistEntity, ArtistDto)),
  ),
);
createMap(mapper, ArtistEntity, ArtistDto);

createMap(mapper, AlbumDto, AlbumEntity);

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity, AlbumEntity, TrackEntity])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
