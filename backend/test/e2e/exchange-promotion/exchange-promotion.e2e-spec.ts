import { ExchangePromotionRequest } from '@/application/exchange-promotion/exchange-promotion.request';
import { ExchangePromotionResponse } from '@/application/exchange-promotion/exchange-promotion.response';
import { convertToUtc, formatDatetime } from '@/shared/dayjs';
import { initializeTestingModule } from '@/test/mocks/initialize-testing-module';
import { loadFixtures, unloadFixures } from '@/test/mocks/typeorm-fixures';
import { INestApplication } from '@nestjs/common';
import * as path from 'path';
import * as supertest from 'supertest';
import { getConnection } from 'typeorm';

describe('PATCH /promotions', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const testing = await initializeTestingModule();
    app = testing.app;
    await testing.app.init();
  });

  afterEach(async () => {
    await unloadFixures(getConnection());
    await app.close();
  });

  it('WHEN request is valid THEN return updated promotion', async () => {
    await loadFixtures(
      getConnection(),
      path.join(__dirname, './exchange-promotion.fixure.yml'),
    );
    const request: ExchangePromotionRequest = {
      email: 'mako@exchange.com',
    };
    const response: ExchangePromotionResponse = {
      code: 200,
      message: '',
      error: false,
      data: {
        code: 'CODIGO',
        email: 'mako@exchange.com',
        name: 'mako',
        updatedAt: formatDatetime(convertToUtc(new Date().getTime(), 0)),
      },
    };
    return supertest(app.getHttpServer())
      .patch('/promotions')
      .send(request)
      .expect(200)
      .expect(response);
  });
});
