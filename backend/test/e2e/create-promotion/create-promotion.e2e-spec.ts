import { CreatePromotionRequest } from '@/application/create-promotion/create-promotion.request';
import { CreatePromotionResponse } from '@/application/create-promotion/create-promotion.response';
import { CreatePromotionService } from '@/application/create-promotion/create-promotion.service';
import { BaseExceptionResponse } from '@/shared/application/exception-response';
import { convertToUtc, formatDatetime } from '@/shared/dayjs';
import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import * as path from 'path';
import * as supertest from 'supertest';
import { getConnection } from 'typeorm';
import { initializeTestingModule } from '../../mocks/initialize-testing-module';
import { loadFixtures, unloadFixures } from '../../mocks/typeorm-fixures';

describe('POST /promotions', () => {
  let module: TestingModule;
  let app: INestApplication;
  let createPromotionService: CreatePromotionService;

  beforeEach(async () => {
    const testing = await initializeTestingModule();
    module = testing.module;
    app = testing.app;
    createPromotionService = module.get<CreatePromotionService>(
      CreatePromotionService,
    );
    const spyCreatePromotionService = jest.spyOn(
      createPromotionService,
      'generateCode',
    );
    spyCreatePromotionService.mockImplementation(() => 'CODIGO');
    await testing.app.init();
  });

  afterEach(async () => {
    await unloadFixures(getConnection());
    await app.close();
  });

  it('WHEN data is new THEN return ok response', async () => {
    const request: CreatePromotionRequest = {
      email: 'mako@abcde.com',
      name: 'Jose Perez',
    };
    const response: CreatePromotionResponse = {
      code: 201,
      message: 'Ok',
      error: false,
      data: {
        code: 'CODIGO',
        email: 'mako@abcde.com',
        name: 'Jose Perez',
        createdAt: formatDatetime(convertToUtc(new Date().getTime(), 0)),
      },
    };
    return supertest(app.getHttpServer())
      .post('/promotions')
      .send(request)
      .expect(201)
      .expect(response);
  });

  it('WHEN email is registered already THEN return internal error', async () => {
    await loadFixtures(
      getConnection(),
      path.join(__dirname, './create-promotion.fixure.yml'),
    );
    const request: CreatePromotionRequest = {
      email: 'a@a.com',
      name: 'mako',
    };
    const response: BaseExceptionResponse = {
      code: 500,
      error: true,
      message: 'No se pudo crear el registro',
      data: {},
    };

    expect(createPromotionService.generateCode()).toBe('CODIGO');
    return supertest(app.getHttpServer())
      .post('/promotions')
      .send(request)
      .expect(500)
      .expect(response);
  });

  it('WHEN bad request THEN return validation error response', async () => {
    const request = {};
    const response: BaseExceptionResponse = {
      code: 400,
      error: true,
      message: 'Bad Request',
      data: {
        detail: [
          'email must be an email',
          'name must be shorter than or equal to 250 characters',
        ],
      },
    };
    return supertest(app.getHttpServer())
      .post('/promotions')
      .send(request)
      .expect(400)
      .expect(response);
  });
});
