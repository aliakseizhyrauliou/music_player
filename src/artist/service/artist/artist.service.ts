import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistDto } from 'src/artist/dto/artist.dto/artist.dto';
import { ArtistEntity } from 'src/artist/entity/artist.entity/artist.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateArtistDto } from '../../dto/artist.dto/create_artist.dto';
import { TrackEntity } from 'src/artist/entity/track.entity/track.entity';
import { TrackDto } from 'src/artist/dto/track.dto/track.dto';
import { AlbumEntity } from '../../../album/entity/album.entity/album.entity';
import { mapper } from '../../../mapper';
import { AlbumDto } from '../../../album/dto/album.dto/album.dto';

@Injectable()
export class ArtistService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ArtistEntity)
    private artistRepository: Repository<ArtistEntity>,
    @InjectRepository(AlbumEntity)
    private albumRepository: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity)
    private trackRepository: Repository<TrackEntity>,
  ) {}

  public async GetAll(): Promise<ArtistDto[]> {
    const artists: ArtistEntity[] = await this.artistRepository.find();

    return artists.map((artist) => {
      const dto = new ArtistDto();
      dto.name = artist.name;
      dto.id = artist.id;
      return dto;
    });
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
    console.log(artistDto);
    return artistDto;
  }

  public async GetById(id: number): Promise<ArtistDto> {
    const artist: ArtistEntity = await this.artistRepository.findOneBy({
      id: id,
    });

    const dto = mapper.map(artist, ArtistEntity, ArtistDto);

    const albums = await this.albumRepository.findBy({ artist: artist });

    dto.albums = albums.map((album) => {
      const dto = new AlbumDto();
      dto.name = album.name;
      dto.id = album.id;
      return dto;
    });

    return dto;
  }

  public async GetTracksByAlbumId(id: number): Promise<TrackDto[]> {
    const album = await this.albumRepository.findOneBy({ id: id });

    const tracks: TrackEntity[] = await this.trackRepository.findBy({
      album: album,
    });

    return tracks.map((track) => {
      const dto = new TrackDto();
      dto.name = track.name;
      dto.id = track.id;
      dto.album = album.id;
      dto.creationDate = new Date().toUTCString();
      return dto;
    });
  }

  public async GetAlbums(id: number): Promise<AlbumEntity[]> {
    const artist: ArtistEntity = await this.artistRepository.findOneBy({
      id: id,
    });

    return artist.albums;
  }
}
