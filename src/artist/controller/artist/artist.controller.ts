import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ArtistDto } from 'src/artist/dto/artist.dto/artist.dto';
import { ArtistService } from 'src/artist/service/artist/artist.service';
import { CreateArtistDto } from '../../dto/artist.dto/create_artist.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { maxDefaultLimit } from '../../../common/variables';
@ApiTags('Artists')
@Controller('api/artist')
export class ArtistController {
  constructor(private artistServiсe: ArtistService) {}

  @Post('createArtist')
  async Create(@Body() artistDto: CreateArtistDto): Promise<ArtistDto> {
    return await this.artistServiсe.Create(artistDto);
  }

  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('getAll')
  async GetAll(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<ArtistDto[]> {
    return await this.artistServiсe.GetAll(offset, limit);
  }

  @Get('/getById')
  async GetById(@Query('id') id: number): Promise<ArtistDto> {
    const artist: ArtistDto = await this.artistServiсe.GetById(id);
    if (artist == null) {
      throw new HttpException('artist_not_found', HttpStatus.NOT_FOUND);
    }
    return await this.artistServiсe.GetById(id);
  }
}
