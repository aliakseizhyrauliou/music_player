import { BaseResponse } from '../../../common/base.response';

export class ConfirmationTokensServiceResponse extends BaseResponse {
  token: string;
  user_id: number;

  constructor(
    is_success: boolean = true,
    error_message: string = null,
    token: string = null,
    user_id: number = null,
  ) {
    super(is_success, error_message);

    this.token = token;
    this.user_id = user_id;
  }
}
