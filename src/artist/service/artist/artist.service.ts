import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ArtistDto} from 'src/artist/dto/artist.dto/artist.dto';
import {ArtistEntity} from 'src/artist/entity/artist.entity/artist.entity';
import {mapper} from 'src/artist/mapper/mapper';
import {DataSource, Repository} from 'typeorm';
import {CreateArtistDto} from "../../dto/artist.dto/create_artist.dto";
import { AlbumEntity } from 'src/artist/entity/album.entity/album.entity';
import { AlbumDto } from 'src/artist/dto/album.dto/album.dto';
import { TrackEntity } from 'src/artist/entity/track.entity/track.entity';
import { TrackDto } from 'src/artist/dto/track.dto/track.dto';

@Injectable()
export class ArtistService {
    constructor(
        private dataSource: DataSource,
        @InjectRepository(ArtistEntity)
        private artistRepository : Repository<ArtistEntity>,
        @InjectRepository(AlbumEntity)
        private albumRepository : Repository<AlbumEntity>,
        @InjectRepository(TrackEntity)
        private trackRepository: Repository<TrackEntity>

    ){}


    public async GetAll() : Promise<ArtistDto[]>{
        let artists : ArtistEntity[] = await this.artistRepository.find();

        return artists.map((artist) => {
            const dto = new ArtistDto();
            dto.name = artist.name;
            dto.id = artist.id
            return dto;
        });
    }

    public async Create(artist: CreateArtistDto) : Promise<ArtistDto>{
        let artistDb : ArtistEntity = mapper.map(artist, ArtistDto, ArtistEntity);
        let createdArtist : CreateArtistDto = await this.artistRepository.save(artistDb);
        let artistDto  : ArtistDto = mapper.map(createdArtist, ArtistEntity, ArtistDto);
        console.log(artistDto);
        return artistDto;
    }

    public async GetById(id: number) : Promise<ArtistDto>{


        
        let artist: ArtistEntity  = await this.artistRepository
            .findOneBy({id: id})
                
        
        let dto = mapper.map(artist, ArtistEntity, ArtistDto);

        let albums = await this.albumRepository.findBy({artist: artist});

        let tracks 
        dto.albums = albums.map((album) => {
            const dto = new AlbumDto();
            dto.name = album.name;
            dto.id = album.id;
            return dto;
        });

        return dto;

    }
    
    public async GetTracksByAlbumId (id: number) : Promise<TrackDto[]> {
        let album = await this.albumRepository.findOneBy({id: id});

        let tracks : TrackEntity[] = await this.trackRepository.findBy({album: album});

        return tracks.map((track) => {
            const dto = new TrackDto();
            dto.name = track.name;
            dto.id = track.id;
            dto.album = album.id;
            dto.creationDate = new Date().toUTCString();
            return dto;
        });
    }

    public async GetAlbums(id: number) : Promise<AlbumEntity[]>{

        let artist: ArtistEntity = await this.artistRepository
        .findOneBy({id: id})

        return artist.albums;
    }
}
