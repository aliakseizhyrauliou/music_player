import { Module } from '@nestjs/common';
import { TrackController } from './controller/track/track.controller';
import { TrackService } from './service/track/track.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackEntity } from './entity/track.entity/track.entity';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { mapper } from '../mapper';
import { TrackDto } from './dto/track.dto/track.dto';

createMap(
  mapper,
  TrackEntity,
  TrackDto,
  forMember(
    (dto) => dto.albumId,
    mapFrom((entity) => entity.album?.id),
  ),
  forMember(
    (dto) => dto.artistId,
    mapFrom((entity) => entity.artist?.id),
  ),
  forMember(
    (dto) => dto.artistName,
    mapFrom((entity) => entity.artist?.name),
  ),
  forMember(
    (dto) => dto.albumName,
    mapFrom((entity) => entity.album?.name),
  ),
);

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
