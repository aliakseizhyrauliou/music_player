import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AlbumDto } from '../../../album/dto/album.dto/album.dto';
import { AlbumEntity } from "../../../album/entity/album.entity/album.entity";

export class ArtistDto {
  @ApiProperty()
  @IsNumber()
  @AutoMap()
  id: number;

  @ApiProperty()
  @IsString()
  @AutoMap()
  name: string;

  @ApiProperty()
  @IsString()
  @AutoMap()
  profileImageUrl: string;

  @ApiProperty()
  @IsString()
  @AutoMap()
  description: string;

  @ApiProperty({ type: [AlbumDto] })
  @IsString()
  @AutoMap(() => AlbumDto)
  albums: AlbumDto[];
}
