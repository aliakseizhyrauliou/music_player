import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistDto } from 'src/artist/dto/artist.dto/artist.dto';
import { ArtistEntity } from 'src/artist/entity/artist.entity/artist.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateArtistDto } from '../../dto/artist.dto/create_artist.dto';
import { AlbumEntity } from '../../../album/entity/album.entity/album.entity';
import { mapper } from '../../../mapper';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistEntity)
    private artistRepository: Repository<ArtistEntity>,
  ) {}

  public async GetAll(offset: number, limit: number): Promise<ArtistDto[]> {
    const entities = await this.artistRepository.find({
      relations: {
        albums: {
          tracks: false,
          artist: false,
        },
      },
      order: {
        name: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return mapper.mapArray(entities, ArtistEntity, ArtistDto);
  }

  public async Create(artist: CreateArtistDto): Promise<ArtistDto> {
    const artistDb: ArtistEntity = mapper.map(artist, ArtistDto, ArtistEntity);
    const createdArtist: CreateArtistDto =
      await this.artistRepository.save(artistDb);

    const artistDto: ArtistDto = mapper.map(
      createdArtist,
      ArtistEntity,
      ArtistDto,
    );
    return artistDto;
  }

  public async GetById(artistId: number): Promise<ArtistDto> {
    const artist: ArtistEntity = await this.artistRepository.findOne({
      relations: {
        albums: {
          tracks: false,
        },
      },
      where: {
        id: artistId,
      },
    });

    return mapper.map(artist, ArtistEntity, ArtistDto);
  }
}
