import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AlbumDto {
    @ApiProperty()
    @IsNumber()
    @AutoMap()
    id: number;

    @ApiProperty()
    @IsString()
    @AutoMap()
    name: string;   
}