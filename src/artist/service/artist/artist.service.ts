import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ArtistDto} from 'src/artist/dto/artist.dto/artist.dto';
import {ArtistEntity} from 'src/artist/entity/artist.entity/artist.entity';
import {mapper} from 'src/artist/mapper/mapper';
import {Repository} from 'typeorm';

@Injectable()
export class ArtistService {
    constructor(
        @InjectRepository(ArtistEntity)
        private artistRepository : Repository<ArtistEntity>
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

    public async Create(artist: ArtistDto) : Promise<ArtistDto>{
        let artistDb : ArtistEntity = mapper.map(artist, ArtistDto, ArtistEntity);
        await this.artistRepository.save(artistDb);
        let artistDto  : ArtistDto = mapper.map(artistDb, ArtistEntity, ArtistDto);
        console.log(artistDto);
        return artistDto;
    }

    public async GetById(id: number) : Promise<ArtistDto>{
        let artist: ArtistEntity = await this.artistRepository
            .findOneBy({id: id})

        return mapper.map(artist, ArtistEntity, ArtistDto);
    }
}
