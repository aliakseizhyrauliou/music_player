import {Body, Controller, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import { ArtistDto } from 'src/artist/dto/artist.dto/artist.dto';
import { ArtistService } from 'src/artist/service/artist/artist.service';

@Controller('artist')
export class ArtistController {
    constructor(private artistServise: ArtistService){

    }

    @Post('/')
    async Create(@Body() artistDto: ArtistDto) : Promise<ArtistDto>{
        await this.artistServise.Create(artistDto);
        return artistDto;
    }

    @Get('/')
    async GetAll() : Promise<ArtistDto[]>{
        return await this.artistServise.GetAll();
    }

    @Get('/getById/:id')
    async GetById(@Param() id: any) : Promise<ArtistDto>{
        let artist : ArtistDto = await this.artistServise.GetById(Number(id.id));
        if(artist == null){
            throw new HttpException('artist_not_found', HttpStatus.NOT_FOUND);
        }
        return await this.artistServise.GetById(Number(id.id));
    }

}
