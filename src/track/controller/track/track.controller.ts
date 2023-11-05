import { Controller, Get, Query } from '@nestjs/common';
import { TrackService } from '../../service/track/track.service';
import { TrackDto } from '../../dto/track.dto/track.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { maxDefaultLimit } from '../../../common/variables';

@ApiTags('Tracks')
@Controller('api/track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/getAll')
  async GetAll(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<TrackDto[]> {
    console.log(limit);
    return await this.trackService.GetAll(offset, limit);
  }

  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/getByAlbumId')
  async GetByAlbumId(
    @Query('albumId') albumId: number,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<TrackDto[]> {
    return await this.trackService.GetTracksByAlbumId(albumId, offset, limit);
  }
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/getByArtistId')
  async GetByArtisId(
    @Query('artistId') artistId: number,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<TrackDto[]> {
    return await this.trackService.GetTracksByArtistId(artistId, offset, limit);
  }

  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get('/findByName')
  async FindByName(
    @Query('name') name: string,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = maxDefaultLimit,
  ): Promise<TrackDto[]> {
    return await this.trackService.FindByName(name, offset, limit);
  }
}
