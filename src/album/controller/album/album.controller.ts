import { AlbumService } from 'src/album/service/album/album.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { AlbumDto } from '../../dto/album.dto/album.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { maxDefaultLimit } from '../../../common/variables';


//tetstsw
@ApiTags('Albums')
@Controller('api/albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/getAll')
  async getAll(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<AlbumDto[]> {
    return await this.albumService.GetAll(offset, limit);
  }
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/getAlbumsByArtistId')
  async GetAlbumsByArtistId(
    @Query('artistId') artistId: number,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<AlbumDto[]> {
    const albums: AlbumDto[] = await this.albumService.GetAlbumsByArtistId(
      artistId,
      offset,
      limit,
    );

    return albums;
  }

  @Get('/getById')
  async GetById(@Query('albumId') albumId: number): Promise<AlbumDto> {
    const album: AlbumDto = await this.albumService.GetAlbumById(albumId);
    if (album == null) {
      throw new HttpException('album_not_found', HttpStatus.NOT_FOUND);
    }
    return album;
  }

  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/findByName')
  async FindByName(
    @Query('name') name: string,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<AlbumDto[]> {
    const albums: AlbumDto[] = await this.albumService.FindByName(
      name,
      offset,
      limit,
    );
    return albums;
  }
}
