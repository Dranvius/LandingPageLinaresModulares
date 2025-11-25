import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import { ConfigService } from "../config/config.service";
import { ContactRequestDto } from "./dto/contact-request.dto";

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly config: ConfigService) {}

  async sendContactMessage(payload: ContactRequestDto) {
    if (!this.config.smtpUser || !this.config.smtpPass) {
      this.logger.error("SMTP credentials missing; cannot send contact emails");
      throw new InternalServerErrorException("Servicio de correo no configurado");
    }

    const transporter = nodemailer.createTransport({
      host: this.config.smtpHost,
      port: this.config.smtpPort,
      secure: this.config.smtpPort === 465,
      auth: {
        user: this.config.smtpUser,
        pass: this.config.smtpPass,
      },
    });

    const mailOptions = {
      from: `Landing Linares <${this.config.smtpUser}>`,
      to: this.config.smtpTo,
      subject: `Nuevo contacto: ${payload.company}`,
      html: `
        <div style="font-family:Arial, sans-serif;padding:12px 16px;">
          <h2 style="margin:0 0 8px 0;color:#111;">Nuevo lead de Linares Modulares</h2>
          <p style="margin:4px 0;">Empresa: <strong>${payload.company}</strong></p>
          <p style="margin:4px 0;">Contacto: <strong>${payload.contact}</strong></p>
          <p style="margin:4px 0;">Teléfono: <strong>${payload.phone || "No indicado"}</strong></p>
          <p style="margin:4px 0;">Email: <strong>${payload.email}</strong></p>
          <p style="margin:8px 0 4px 0;">Mensaje:</p>
          <p style="margin:4px 0; white-space:pre-line;">${payload.message}</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { ok: true };
    } catch (error) {
      this.logger.error(`Error enviando correo: ${error}`);
      throw new InternalServerErrorException("No pudimos enviar tu mensaje");
    }
  }
}
