import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
 
    constructor(private readonly mailService: MailerService){}

    async sendMail() : Promise<any> {
        await this.mailService.sendMail({
            to: "aa",
            from: "aa",
            subject: "aa",
            text: "asa",
            html: "asdad"
        });
    }

}
