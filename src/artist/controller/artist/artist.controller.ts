import {Body, Controller, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import {ArtistDto} from 'src/artist/dto/artist.dto/artist.dto';
import {ArtistService} from 'src/artist/service/artist/artist.service';
import {CreateArtistDto} from "../../dto/artist.dto/create_artist.dto";
import { AlbumEntity } from 'src/artist/entity/album.entity/album.entity';

@Controller('artist')
export class ArtistController {
    constructor(private artistServise: ArtistService){

    }

    @Post('createArtist')
    async Create(@Body() artistDto: CreateArtistDto) : Promise<ArtistDto>{
        return await this.artistServise.Create(artistDto);
    }

    @Get('getAll')
    async GetAll() : Promise<ArtistDto[]>{
        return await this.artistServise.GetAll();
    }

    @Get('/getById/:id')
    async GetById(@Param('id') id: number): Promise<ArtistDto> {
        let artist : ArtistDto = await this.artistServise.GetById(id);
        if(artist == null){
            throw new HttpException('artist_not_found', HttpStatus.NOT_FOUND);
        }
        return await this.artistServise.GetById(id);
    }

    @Get("/getAlbumsByUserId/:id")
    async GetBgetAlbumsByUserIdyId(@Param('id') id: number): Promise<AlbumEntity[]> {
        let artist : AlbumEntity[] = await this.artistServise.GetAlbums(id);
        if(artist == null){
            throw new HttpException('artist_not_found', HttpStatus.NOT_FOUND);
        }
        return artist;
    }

}
