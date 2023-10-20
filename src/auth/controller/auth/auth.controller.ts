import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../service/auth/auth.service';
import { UserService } from '../../../user/service/user/user.service';
import { UserSignUpDto } from '../../../user/dto/user.dto/user.sign_up.dto';
import { BaseResponse } from '../../../common/base.response';
import { UserSignInDto } from '../../../user/dto/user.dto/user.sign_in.dto';
import { AuthServiceResponse } from '../../service/serviceResponses/auth.service.response';
import { TokenDto } from '../../dto/token.dto';
import { SendConfirmationMailDto } from '../../dto/sendConfirmationMail.dto';
import { ConfirmationTokensService } from '../../service/auth/confirmation.tokens.service';
import { MailService } from 'src/mail/service/mail/mail.service';
import { VerificateDto } from 'src/auth/dto/verificate.dto';
import { ConfirmationTokensServiceResponse } from 'src/auth/service/serviceResponses/confirmationTokenService.response';
import { AuthTypeResponse } from 'src/auth/service/serviceResponses/enums/auth.respose.type';
import { RefreshTokenDto } from 'src/auth/dto/refreshToken.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private tokensService: ConfirmationTokensService,
    private mailService: MailService,
  ) {}

  @HttpCode(200)
  @Post('sign_up')
  async signUp(@Body() userModel: UserSignUpDto) {
    console.log(userModel);
    const signUpResult: BaseResponse =
      await this.userService.createUser(userModel);
    if (!signUpResult.is_success) {
      if (signUpResult.error_message === 'user_exist') {
        throw new HttpException(
          signUpResult.error_message,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  @HttpCode(200)
  @Post('sign_in')
  async signIn(@Body() userModel: UserSignInDto): Promise<TokenDto> {
    console.log(userModel);
    const signInResult: AuthServiceResponse =
      await this.authService.signIn(userModel);
    if (signInResult.is_success) {
      return new TokenDto(
        signInResult.access_token,
        signInResult.refresh_token,
      );
    }

    if (signInResult.responseType == AuthTypeResponse.email_not_confirmed) {
      throw new HttpException(
        {
          message: signInResult.error_message,
          data: {
            user_id: signInResult.user_id,
            email: signInResult.email,
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (signInResult.responseType == AuthTypeResponse.invalid_password) {
      throw new HttpException(
        signInResult.error_message,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (signInResult.responseType == AuthTypeResponse.user_not_found) {
      throw new HttpException(
        signInResult.error_message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @HttpCode(200)
  @Post('refresh_token')
  async refreshToken(
    @Body() refresh_token: RefreshTokenDto,
  ): Promise<TokenDto> {
    if (
      refresh_token === undefined ||
      refresh_token.refresh_token === undefined
    ) {
      throw new HttpException('invalid_token', HttpStatus.BAD_REQUEST);
    }

    const refreshTokenProcessResult: AuthServiceResponse =
      await this.authService.refreshToken(refresh_token.refresh_token);

    if (!refreshTokenProcessResult.is_success) {
      throw new HttpException(
        refreshTokenProcessResult.error_message,
        HttpStatus.BAD_REQUEST,
      );
    }

    return new TokenDto(
      refreshTokenProcessResult.access_token,
      refreshTokenProcessResult.refresh_token,
    );
  }

  @HttpCode(200)
  @Post('sendVerificationMail')
  async sendConfirmationMail(@Body() dto: SendConfirmationMailDto) {
    const generationResult: ConfirmationTokensServiceResponse =
      await this.tokensService.GenerateToken(dto);
    if (!generationResult.is_success) {
      throw new HttpException(
        generationResult.error_message,
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      await this.mailService.sendMail(
        dto.email,
        this.tokensService.generateUrl(
          dto.return_url,
          generationResult.token,
          generationResult.user_id,
        ),
      );
    } catch {
      throw new HttpException('error_while_send_mail', HttpStatus.BAD_REQUEST);
    }
  }

  @HttpCode(200)
  @Post('verificateEmail')
  async verificateMail(@Body() dto: VerificateDto) {
    const verificationResult: BaseResponse =
      await this.tokensService.VerificateToken(dto);

    if (!verificationResult.is_success) {
      throw new HttpException(
        verificationResult.error_message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
