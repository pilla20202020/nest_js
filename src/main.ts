import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dd as ddFn } from './common/utils/dd';;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  global.dd = ddFn as any;
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();