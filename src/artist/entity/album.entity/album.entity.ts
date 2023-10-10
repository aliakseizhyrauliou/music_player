import { AutoMap } from "@automapper/classes";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArtistEntity } from "../artist.entity/artist.entity";
import { TrackEntity } from "../track.entity/track.entity";

@Entity()
export class AlbumEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({nullable: false})
    name: string;

    @AutoMap()
    @Column({nullable: true})
    durationSec: number;

    @AutoMap()
    @Column({nullable: true})
    description: string;

    @AutoMap()
    @OneToMany(() => TrackEntity, track => track.album)
    @JoinColumn()
    tracks: TrackEntity[];

    @AutoMap()
    @ManyToOne(() => ArtistEntity, artist => artist.albums)
    @JoinColumn()
    artist: ArtistEntity;
}
