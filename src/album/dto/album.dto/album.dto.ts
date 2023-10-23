import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ArtistDto } from '../../../artist/dto/artist.dto/artist.dto';

export class AlbumDto {
  @ApiProperty()
  @IsNumber()
  @AutoMap()
  id: number;

  @ApiProperty()
  @IsString()
  @AutoMap()
  name: string;

  @ApiProperty()
  @AutoMap()
  imageUrl: string;

  @ApiProperty({ type: [ArtistDto] })
  @AutoMap(() => ArtistDto)
  artist: ArtistDto;
}
