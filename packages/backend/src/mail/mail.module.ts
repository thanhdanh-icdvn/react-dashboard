import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { join } from 'path';
import { MailService } from './mail.service';

@Module({
  providers: [MailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_SMTP_HOST || 'smtp.gmail.com',
        secure: Boolean(process.env.MAILER_SMTP_SECURE) || false,
        auth: {
          user: process.env.MAILER_SMTP_USER,
          pass: process.env.MAILER_SMTP_PASS,
        },
      },
      defaults: {
        from: `"No Reply" <${process.env.MAILER_SMTP_USER}>`,
      },
      template: {
        dir: join(__dirname, 'dist/template'),
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  exports: [MailService],
})
export class MailModule {}
