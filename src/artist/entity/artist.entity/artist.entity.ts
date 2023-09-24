import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArtistEntity {

    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({nullable: false})
    name: string;

    @AutoMap()
    @Column({nullable: true})
    profileImageUrl: string;

    @AutoMap()
    @Column({nullable: true})
    description: string;
}
