import { AutoMap } from '@automapper/classes';

export class TrackDto {
  @AutoMap()
  id: number;
  @AutoMap()
  name: string;
  @AutoMap()
  albumId: number;
  @AutoMap()
  artistId: number;
  @AutoMap()
  artistName: string;
  @AutoMap()
  albumName: string;
  @AutoMap()
  creationDate: string;
  @AutoMap()
  imageUrl: string;
}
