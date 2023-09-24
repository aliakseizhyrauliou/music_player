import {BaseResponse} from "./base.response";

export class AuthServiceResponse extends BaseResponse{
    access_token : string;
    refresh_token: string;

    constructor(is_success: boolean = true,
                error_message: string = null,
                access_token: string = null,
                refresh_token: string = null) {
        super(is_success, error_message);

        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
}