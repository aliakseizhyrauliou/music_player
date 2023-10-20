import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/user.entity/user.entity';
import { BaseResponse } from '../../../auth/service/serviceResponses/base.response';
import { mapper } from '../../../mapper';
import { HashingService } from '../../../auth/service/hashing/hashing.service';
import { UserSignUpDto } from '../../dto/user.dto/user.sign_up.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
    private hashingService: HashingService,
  ) {}

  async findByRefreshToken(token: string): Promise<UserEntity> {
    return this.userEntityRepository.findOneBy({ refresh_token: token });
  }
  async findByEmail(email: string) {
    return this.userEntityRepository.findOneBy({ email: email });
  }

  async findById(id: number) {
    return this.userEntityRepository.findOneBy({ id: id });
  }

  async createUser(user: UserSignUpDto): Promise<BaseResponse> {
    if ((await this.findByEmail(user.email)) !== null) {
      return new BaseResponse(false, 'user_exist');
    }

    const userEntity: UserEntity = mapper.map(user, UserSignUpDto, UserEntity);

    userEntity.is_email_confirmed = false;

    userEntity.password_hash = await this.hashingService.hashPassword(
      user.password,
    );

    userEntity.refresh_token =
      await this.hashingService.generateRandomStrig(35);

    await this.userEntityRepository.save(userEntity);

    return new BaseResponse();
  }
}
