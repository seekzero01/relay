import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  app.enableCors({
    origin: [process.env.WEB_URL!],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
