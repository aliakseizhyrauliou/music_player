import {BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "../../auth.guard";
import {AuthService} from "../../service/auth/auth.service";
import {UserService} from "../../../user/service/user/user.service";
import {UserSignUpDto} from "../../../user/dto/user.dto/user.sign_up.dto";
import {BaseResponse} from "../../service/serviceResponses/base.response";
import {UserSignInDto} from "../../../user/dto/user.dto/user.sign_in.dto";
import {AuthServiceResponse} from "../../service/serviceResponses/auth.service.response";
import {TokenDto} from "../../dto/token.dto";
import {SendConfirmationMailDto} from "../../dto/sendConfirmationMail.dto";
import {ConfirmationTokensService} from "../../service/auth/confirmation.tokens.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
                private userService : UserService,
                private tokensService: ConfirmationTokensService) {
    }
    @Post('sign_up')
    async signUp(@Body() userModel : UserSignUpDto){
        console.log(userModel);
        const signUpResult: BaseResponse = await this.userService.createUser(userModel);
        if(!signUpResult.is_success){
            if(signUpResult.error_message === "user_exist"){
                throw new HttpException(signUpResult.error_message, HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Post('sign_in')
    async signIn(@Body() userModel: UserSignInDto): Promise<TokenDto>{
        console.log(userModel);
        const signInResult: AuthServiceResponse = await this.authService.signIn(userModel);
        if(signInResult.is_success){
            return new TokenDto(signInResult.access_token);
        }

        throw new HttpException(signInResult.error_message, HttpStatus.BAD_REQUEST);
    }

    @Post("sendVerificationMail")
    async sendConfirmationMail(@Body() dto: SendConfirmationMailDto){
        const generationResult: BaseResponse = await this.tokensService.GenerateToken(dto);
        if(!generationResult.is_success){
            throw new HttpException(generationResult.error_message, HttpStatus.BAD_REQUEST);
        }

        return  { status: HttpStatus.OK, data: ["sent"] }
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    async Test() : Promise<string>{
        return "WORKS!";
    }
}
