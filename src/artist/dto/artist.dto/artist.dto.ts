import { AutoMap } from "@automapper/classes";
import { IsNumber, IsString } from "class-validator";

export class ArtistDto {

    @IsNumber()
    @AutoMap()
    id: number;


    @IsString()
    @AutoMap()
    name: string;

    @IsString()
    @AutoMap()
    profileImageUrl: string;

    @IsString()
    @AutoMap()
    description: string;
}
