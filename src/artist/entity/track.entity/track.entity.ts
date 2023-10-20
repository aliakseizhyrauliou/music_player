import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArtistEntity } from '../artist.entity/artist.entity';
import { AlbumEntity } from '../../../album/entity/album.entity/album.entity';

@Entity()
export class TrackEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ nullable: false })
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  durationSec: number;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @AutoMap()
  @ManyToOne(() => ArtistEntity, (artist) => artist.tracks)
  @JoinColumn()
  artist: ArtistEntity;

  @AutoMap()
  @ManyToOne(() => AlbumEntity, (album) => album.tracks)
  @JoinColumn()
  album: AlbumEntity;
}
