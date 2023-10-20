import { AuthTypeResponse } from './enums/auth.respose.type';
import { BaseResponse } from '../../../common/base.response';

export class AuthServiceResponse extends BaseResponse {
  access_token: string;
  refresh_token: string;
  email: string;
  user_id: number;
  responseType: AuthTypeResponse;

  constructor(
    is_success: boolean = true,
    error_message: string = null,
    access_token: string = null,
    refresh_token: string = null,
    email: string = null,
    user_id: number = 0,
    responseType: AuthTypeResponse = null,
  ) {
    super(is_success, error_message);

    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.responseType = responseType;
    this.email = email;
    this.user_id = user_id;
  }
}
