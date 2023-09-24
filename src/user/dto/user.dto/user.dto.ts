import {AutoMap} from "@automapper/classes";
import {PrimaryGeneratedColumn} from "typeorm";
import {IsEmail, IsString} from "class-validator";

export class UserDto {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @IsEmail()
    email: string;

    @AutoMap()
    @IsString()
    name: string;

    @AutoMap()
    profileImageUrl: string;

    @IsString()
    @AutoMap()
    description: string;

    @IsString()
    password: string;
}
