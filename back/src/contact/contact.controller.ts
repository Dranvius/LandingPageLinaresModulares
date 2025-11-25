import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactRequestDto } from "./dto/contact-request.dto";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(200)
  async send(@Body() body: ContactRequestDto) {
    return this.contactService.sendContactMessage(body);
  }
}
