import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "../../entity/user.entity/user.entity";
import {BaseResponse} from "../../../auth/service/serviceResponses/base.response";
import {mapper} from "../../mapper/mapper";
import {HashingService} from "../../../auth/service/hashing/hashing.service";
import {UserSignUpDto} from "../../dto/user.dto/user.sign_up.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userEntityRepository : Repository<UserEntity>,
        private hashingService: HashingService
    ) {
    }

    async findByEmail(email: string) {
        return this.userEntityRepository.findOneBy({email: email});
    }


    async createUser(user: UserSignUpDto) : Promise<BaseResponse> {
        if(await this.findByEmail(user.email) !== null){
            return new BaseResponse(false, "user_exist");
        }

        const userEntity : UserEntity = mapper.map(user, UserSignUpDto, UserEntity);

        userEntity.password_hash = await this.hashingService.hashPassword(user.password);

        await this.userEntityRepository.save(userEntity);

        return new BaseResponse();
    }
}
