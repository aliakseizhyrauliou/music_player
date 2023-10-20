import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { mapper } from '../../../mapper';
import { TrackEntity } from '../../entity/track.entity/track.entity';
import { TrackDto } from '../../dto/track.dto/track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(TrackEntity)
    private trackEntityRepository: Repository<TrackEntity>,
  ) {}

  public async GetAll(offset: number, limit: number): Promise<TrackDto[]> {
    const entities = await this.trackEntityRepository.find({
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
      relations: {
        artist: {
          tracks: false,
        },
        album: {
          tracks: false,
          artist: false,
        },
      },
    });

    return mapper.mapArray(entities, TrackEntity, TrackDto);
  }
  public async GetTracksByArtistId(
    artistId: number,
    offset: number,
    limit: number,
  ): Promise<TrackDto[]> {
    const entities = await this.trackEntityRepository.find({
      relations: {
        artist: {
          tracks: false,
        },
        album: {
          tracks: false,
          artist: false,
        },
      },
      where: {
        artist: {
          id: artistId,
        },
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, TrackEntity, TrackDto);
  }

  public async GetTracksByAlbumId(
    albumId: number,
    offset: number,
    limit: number,
  ): Promise<TrackDto[]> {
    const entities = await this.trackEntityRepository.find({
      relations: {
        artist: {
          tracks: false,
        },
        album: {
          tracks: false,
          artist: false,
        },
      },
      where: {
        album: {
          id: albumId,
        },
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, TrackEntity, TrackDto);
  }

  public async FindByName(
    name: string,
    offset: number,
    limit: number,
  ): Promise<TrackDto[]> {
    const entities = await this.trackEntityRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, TrackEntity, TrackDto);
  }
}
