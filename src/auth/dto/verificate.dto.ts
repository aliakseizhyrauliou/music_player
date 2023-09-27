import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class VerificateDto{
    @ApiProperty()
    @IsString()
    token: string;
    
    @ApiProperty()
    @IsNumber()
    user_id: number;
}