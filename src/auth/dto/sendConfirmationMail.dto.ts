import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNumber, IsString} from "class-validator";

export class SendConfirmationMailDto{
    @ApiProperty()
    @IsNumber()
    user_id: number;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    return_url : string;
}