import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(email: string, returnUrl: string): Promise<any> {
    console.log(email);
    console.log(returnUrl);

    await this.mailService.sendMail({
      to: email,
      from: 'a6o6a.acu111dau@gmail.com',
      subject: 'Verify email in Musion',
      html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Confirmation</title>
                <style>
                  .confirm-message {
                  background-color: #0F1E36;
                  padding: 20px;
                  font-family: Arial, sans-serif;
                  text-align: center;
                  border: 1px solid #ccc;
                }
                .confirm-message h1 {
                  font-size: 24px;
                  color: #76CCFB;
                  margin-bottom: 10px;
                }
                .confirm-message p {
                  font-size: 16px;
                  color: white;
                  margin-bottom: 20px;
                }
                .confirm-message a {
                  background-color: #76CCFB;
                  color: white;
                  padding: 12px 20px;
                  border-radius: 4px;
                  text-decoration: none;
                  font-size: 16px;
                  margin-top: 20px;
                  display: inline-block;
                }
                .confirm-message span {
                  color: #76CCFB;
                  font-weight: bold;
                }
                .confirm-message .warning {
                  font-size: 14px;
                }
              </style>
            </head>
                <body>   
                    <div class='confirm-message'>
                        <h1>Verify your email address</h1>
                        <p>To continue setting up your <span>Musion</span> account, please, verify your email address.</p>
                        <p class="warning">If you're not signing up on our page, we ask you to delete or ignore this message!</p>
                        <a href=${returnUrl}>Verify email address</a>
                        <!-- <h1>Калі ласка, падтвердзіце вашу пошту</h1>
                        <p>Неабходна падтвердзіць пошту, якую Вы указалі, каб карыстацца акаўнтам <span>Musion</span></p>
                        <p class="warning">Калі вы не здзяйсняеце рэгістрацыі на сайце - выдаліце гэты ліст або не рэагуйце на яго!</p>
                        <a href=${returnUrl}>Падтвердзіць</a> -->
                    </div>
                </body>
            </html>
            `,
    });
  }
}
