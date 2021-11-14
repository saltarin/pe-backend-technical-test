import { exceptionFactory } from '@/infrastructure/validation/exceptionFactory';
import { ValidationFilter } from '@/infrastructure/validation/validation.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: exceptionFactory,
    }),
  );
  app.useGlobalFilters(new ValidationFilter());
  await app.listen(3000);
}
bootstrap();
