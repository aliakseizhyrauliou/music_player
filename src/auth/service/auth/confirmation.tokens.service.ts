import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../../../user/entity/user.entity/user.entity";
import {Repository} from "typeorm";
import {UserConfirmationTokenEntity} from "../../entity/user.confirmation.token.entity";
import {SendConfirmationMailDto} from "../../dto/sendConfirmationMail.dto";
import {BaseResponse} from "../serviceResponses/base.response";
import {UserService} from "../../../user/service/user/user.service";
import * as constants from "constants";
import {confirmationTokenLength} from "../../constans";
import {VerificateDto} from "../../dto/verificate.dto";
import {MailService} from "../../../mail/service/mail/mail.service";
import { ConfirmationTokensServiceResponse } from "../serviceResponses/confirmationTokenService.response";

@Injectable()
export class ConfirmationTokensService{

    constructor(@InjectRepository(UserConfirmationTokenEntity)
        private userConfirmationTokenEntityRepository : Repository<UserConfirmationTokenEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private userService: UserService,
    )
    {
    }


    async getByUserId(userId: number) : Promise<UserConfirmationTokenEntity>{
        return await this.userConfirmationTokenEntityRepository.findOneBy({user_id: userId});
    }

    async GenerateToken(dto: SendConfirmationMailDto) : Promise<ConfirmationTokensServiceResponse>{
        const user : UserEntity = await this.userService.findByEmail(dto.email);

        console.log(user);

        if(user === null || user.id !== dto.user_id){
            return new ConfirmationTokensServiceResponse(false, "user_not_found")
        }

        const token : string = await this.generateRandomString(confirmationTokenLength);

        const newTokenEntity : UserConfirmationTokenEntity = new UserConfirmationTokenEntity();
        newTokenEntity.token = token;
        newTokenEntity.user_id = dto.user_id;

        const resut = await this.userConfirmationTokenEntityRepository.save(newTokenEntity);

        return new ConfirmationTokensServiceResponse(true, "", resut.token, user.id);
    }

    async VerificateToken(dto: VerificateDto) : Promise<BaseResponse>{
        const tokenEntity: UserConfirmationTokenEntity = await this.userConfirmationTokenEntityRepository
            .findOneBy({user_id: dto.user_id, is_confirmed: false});

        if(tokenEntity === null || tokenEntity?.token !== dto.token || tokenEntity?.user_id !== dto.user_id){
            return new BaseResponse(false, "incorrect_token");
        }

        tokenEntity.is_confirmed = true;

        const user : UserEntity = await this.userService.findById(dto.user_id);

        user.is_email_confirmed = true;

        await this.userConfirmationTokenEntityRepository.save(tokenEntity);
        await this.userRepository.save(user);

        return new BaseResponse();
    }

    private async generateRandomString(length: number) : Promise<string>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    public generateUrl(returnUrl: string, code: string, userId: number) : string{
        return returnUrl + '/' + userId + "/" + code;
    }

}