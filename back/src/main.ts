import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import * as morgan from "morgan";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn'] });

  const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:4173";
  app.enableCors({
    origin: allowedOrigin === "*" ? true : allowedOrigin.split(",").map((o) => o.trim()),
    credentials: false,
  });

  app.use(morgan("dev"));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.setGlobalPrefix("api");

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port, "0.0.0.0");
  console.log(`Nest server listening on port ${port}`);
}

bootstrap();
