import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserConfirmationTokenEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    user_id: number;

    @Column({nullable: false})
    token: string;

    @Column({default: false})
    is_expired: boolean;

    @Column({ type: 'timestamptz', nullable: true})
    expiration_date: Date;

    @Column({default: false})
    is_confirmed: boolean;
}