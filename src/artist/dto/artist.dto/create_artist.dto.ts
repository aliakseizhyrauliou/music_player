import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";
import {AutoMap} from "@automapper/classes";

export class CreateArtistDto {

    @ApiProperty()
    @IsString()
    @AutoMap()
    name: string;

    @ApiProperty()
    @IsString()
    @AutoMap()
    profileImageUrl: string;

    @ApiProperty()
    @IsString()
    @AutoMap()
    description: string;
}