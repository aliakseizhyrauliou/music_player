import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from '../../entity/album.entity/album.entity';
import { Like, Repository } from 'typeorm';
import { mapper } from '../../../mapper';
import { AlbumDto } from '../../dto/album.dto/album.dto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private albumEntityRepository: Repository<AlbumEntity>,
  ) {}

  public async GetAll(offset: number, limit: number): Promise<AlbumDto[]> {
    const entities = await this.albumEntityRepository.find({
      relations: {
        artist: true,
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, AlbumEntity, AlbumDto);
  }
  public async GetAlbumsByArtistId(
    artistId: number,
    offset: number,
    limit: number,
  ): Promise<AlbumDto[]> {
    const entities = await this.albumEntityRepository.find({
      relations: {
        artist: {
          tracks: false,
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
    return mapper.mapArray(entities, AlbumEntity, AlbumDto);
  }

  public async FindByName(
    name: string,
    offset: number,
    limit: number,
  ): Promise<AlbumDto[]> {
    const entities = await this.albumEntityRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, AlbumEntity, AlbumDto);
  }

  public async GetAlbumById(albumId: number): Promise<AlbumDto> {
    const entity = await this.albumEntityRepository.findOne({
      where: {
        id: albumId,
      },
    });

    return mapper.map(entity, AlbumEntity, AlbumDto);
  }
}
