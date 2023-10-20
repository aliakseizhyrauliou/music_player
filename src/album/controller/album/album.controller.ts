import { AlbumService } from 'src/album/service/album/album.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AlbumDto } from '../../dto/album.dto/album.dto';

@Controller('album')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get('/getAlbumsByArtistId/:id')
  async GetAlbumsByUserIdyId(@Param('id') id: number): Promise<AlbumDto[]> {
    const artist: AlbumDto[] = await this.albumService.GetAlbums(id);
    if (artist == null) {
      throw new HttpException('artist_not_found', HttpStatus.NOT_FOUND);
    }
    return artist;
  }
}
