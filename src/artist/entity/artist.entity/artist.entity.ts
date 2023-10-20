import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TrackEntity } from '../track.entity/track.entity';
import { AlbumEntity } from '../../../album/entity/album.entity/album.entity';

@Entity()
export class ArtistEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ nullable: false })
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  profileImageUrl: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @AutoMap()
  @OneToMany(() => TrackEntity, (track) => track.artist, { eager: true })
  @JoinColumn()
  tracks: TrackEntity[];

  @AutoMap()
  @OneToMany(() => AlbumEntity, (album) => album.artist, { eager: true })
  @JoinColumn()
  albums: AlbumEntity[];
}
