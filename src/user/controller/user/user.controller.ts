import {Controller, Get} from '@nestjs/common';
import {UserDto} from "../../dto/user.dto/user.dto";
import {AuthGuard} from "../../../auth/auth.guard";

@Controller('user')
export class UserController {

}
