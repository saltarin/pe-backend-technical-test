import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from '@/infrastructure/validation/exceptionFactory';
import { ValidationFilter } from '@/infrastructure/validation/validation.filter';

export const initializeTestingModule = async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  const app = module.createNestApplication();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidNonWhitelisted: true,
      exceptionFactory: exceptionFactory,
    }),
  );
  app.useGlobalFilters(new ValidationFilter());
  return { app, module };
};
