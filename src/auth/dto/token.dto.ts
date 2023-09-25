export class TokenDto{

    constructor(token : string) {
        this.access_token = token;
    }
    access_token: string;
    refresh_token: string;
}