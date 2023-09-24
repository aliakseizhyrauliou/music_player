export class BaseResponse{
    public is_success : boolean;
    public error_message : string;

    constructor(is_success : boolean = true,
                error_message: string = undefined) {
        this.is_success = is_success;
        this.error_message = error_message;
    }
}