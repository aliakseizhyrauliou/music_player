import {BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, UseGuards, Request} from '@nestjs/common';
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
import { MailService } from 'src/mail/service/mail/mail.service';
import { UserEntity } from 'src/user/entity/user.entity/user.entity';
import { UserConfirmationTokenEntity } from 'src/auth/entity/user.confirmation.token.entity';
import { VerificateDto } from 'src/auth/dto/verificate.dto';
import { ConfirmationTokensServiceResponse } from 'src/auth/service/serviceResponses/confirmationTokenService.response';
import { AuthTypeResponse } from 'src/auth/service/serviceResponses/authResposeType';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
                private userService : UserService,
                private tokensService: ConfirmationTokensService,
                private mailService: MailService) {
    }

    @HttpCode(200)
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

    @HttpCode(200)
    @Post('sign_in')
    async signIn(@Body() userModel: UserSignInDto): Promise<TokenDto>{
        console.log(userModel);
        const signInResult: AuthServiceResponse = await this.authService.signIn(userModel);
        if(signInResult.is_success){
            return new TokenDto(signInResult.access_token);
        }
        
        if(signInResult.responseType == AuthTypeResponse.email_not_confirmed){
            throw new HttpException(
                {
                  message: signInResult.error_message,
                  data: {
                    user_id: signInResult.user_id,
                    email: signInResult.email
                  },
                },
                HttpStatus.BAD_REQUEST, 
              );
        }

    }

    @HttpCode(200)
    @Post("sendVerificationMail")
    async sendConfirmationMail(@Body() dto: SendConfirmationMailDto){
        const generationResult: ConfirmationTokensServiceResponse = await this.tokensService.GenerateToken(dto);
        if(!generationResult.is_success){
            throw new HttpException(generationResult.error_message, HttpStatus.BAD_REQUEST);
        }
        
        try{
            await this.mailService.sendMail(dto.email, this.tokensService.generateUrl(dto.return_url, generationResult.token, generationResult.user_id));
        }
        catch{
            throw new HttpException("error_while_send_mail", HttpStatus.BAD_REQUEST);
        }
    }

    @HttpCode(200)
    @Post("verificateEmail")
    async verificateMail(@Body() dto: VerificateDto){
        const verificationResult : BaseResponse = await this.tokensService.VerificateToken(dto);

        if(!verificationResult.is_success){
            throw new HttpException(verificationResult.error_message, HttpStatus.BAD_REQUEST);
        }
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
