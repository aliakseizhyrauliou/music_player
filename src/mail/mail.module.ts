import { Module } from '@nestjs/common';
import { MailService } from './service/mail/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        auth: {
          user: "a6o6a.acu111dau@gmail.com",
          pass: "zuhe xufs cuvt llwq"
        }
      }
    })
  ],
  providers: [MailService]
})
export class MailModule {}
