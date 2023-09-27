import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {AutoMap} from "@automapper/classes";

@Entity()
export class UserEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({nullable: false})
    email: string;

    @AutoMap()
    @Column({nullable: false})
    name: string;

    @AutoMap()
    @Column({nullable: true})
    profileImageUrl: string;

    @AutoMap()
    @Column({nullable: true})
    description: string;

    @AutoMap()
    @Column({nullable: false})
    password_hash: string;

    @AutoMap()
    @Column()
    is_email_confirmed: boolean;
}
