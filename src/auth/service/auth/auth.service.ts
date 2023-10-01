import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../../../user/service/user/user.service";
import {HashingService} from "../hashing/hashing.service";
import {AuthServiceResponse} from "../serviceResponses/auth.service.response";
import {JwtService} from "@nestjs/jwt";
import {UserSignInDto} from "../../../user/dto/user.dto/user.sign_in.dto";
import { AuthTypeResponse } from '../serviceResponses/authResposeType';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entity/user.entity/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService : UserService,
                private hashingService : HashingService,
                private jwtService: JwtService) {
    }

    async signIn(userModel : UserSignInDto): Promise<AuthServiceResponse> {
        const user = await this.userService.findByEmail(userModel.email);
        if (user === null) {
            return new AuthServiceResponse(false, "user_not_found");
        }

        const hashingCompareResult : boolean = await this.hashingService.comparePassword(userModel.password, user.password_hash);
        if(!hashingCompareResult){
            return new AuthServiceResponse(false, "password_incorrect");
        }

        if(!user.is_email_confirmed){
            return new AuthServiceResponse(false, "email_not_confirmed", "", "", user.email, user.id, AuthTypeResponse.email_not_confirmed);
        }

        const token = await this.generateAccessToken(user);

        return new AuthServiceResponse(true, null, token, user.refresh_token);
    }

    async refreshToken(refreshToken: string) : Promise<AuthServiceResponse>{
        console.log(refreshToken);
        const user = await this.userService.findByRefreshToken(refreshToken);

        if (user === null) {
            return new AuthServiceResponse(false, "user_not_found");
        }

        const new_access_token : string = await this.generateAccessToken(user);

        return new AuthServiceResponse(true, null, new_access_token, user.refresh_token);
    }

    private async generateAccessToken(user: UserEntity) : Promise<string> {
        const payload = { sub: user.id, username: user.name};
        const access_token : string = await this.jwtService.signAsync(payload);

        return access_token;
    }

    
}
