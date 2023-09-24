import {AutoMap} from "@automapper/classes";
import {IsEmail, IsString} from "class-validator";

export class UserSignUpDto{

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