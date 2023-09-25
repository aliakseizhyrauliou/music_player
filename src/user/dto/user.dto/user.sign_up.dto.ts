import {AutoMap} from "@automapper/classes";
import {IsEmail, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserSignUpDto{

    @ApiProperty()
    @AutoMap()
    @IsEmail()
    email: string;

    @ApiProperty()
    @AutoMap()
    @IsString()
    name: string;

    @ApiProperty()
    @AutoMap()
    profileImageUrl: string;

    @ApiProperty()
    @IsString()
    @AutoMap()
    description: string;

    @ApiProperty()
    @IsString()
    password: string;
}