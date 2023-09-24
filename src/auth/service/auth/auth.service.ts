import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../../../user/service/user/user.service";
import {HashingService} from "../hashing/hashing.service";
import {AuthServiceResponse} from "../serviceResponses/auth.service.response";
import {JwtService} from "@nestjs/jwt";
import {UserSignInDto} from "../../../user/dto/user.dto/user.sign_in.dto";

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
        const payload = { sub: user.id, username: user.name };

        const access_token : string = await this.jwtService.signAsync(payload);

        return new AuthServiceResponse(true, null, access_token, null);
    }
}
