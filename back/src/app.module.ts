import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/config.module";
import { ContactModule } from "./contact/contact.module";

@Module({
  imports: [ConfigModule, ContactModule],
})
export class AppModule {}
