import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
  get port(): number {
    return parseInt(process.env.PORT || "3000", 10);
  }

  get allowedOrigin(): string {
    return process.env.ALLOWED_ORIGIN || "http://localhost:4173";
  }

  get smtpHost(): string {
    return process.env.SMTP_HOST || "smtp.gmail.com";
  }

  get smtpPort(): number {
    return parseInt(process.env.SMTP_PORT || "465", 10);
  }

  get smtpUser(): string {
    return process.env.SMTP_USER || "";
  }

  get smtpPass(): string {
    return process.env.SMTP_PASS || "";
  }

  get smtpTo(): string {
    return process.env.SMTP_TO || this.smtpUser;
  }
}
