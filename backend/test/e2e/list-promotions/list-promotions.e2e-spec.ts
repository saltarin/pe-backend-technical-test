import { ListPromotionsRequest } from '@/application/list-promotions/list-promotions.request';
import { ListPromotionsResponse } from '@/application/list-promotions/list-promotions.response';
import { initializeTestingModule } from '@/test/mocks/initialize-testing-module';
import { loadFixtures, unloadFixures } from '@/test/mocks/typeorm-fixures';
import { INestApplication } from '@nestjs/common';
import * as path from 'path';
import * as supertest from 'supertest';
import { getConnection } from 'typeorm';

describe('GET /promotions', () => {
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
      path.join(__dirname, './list-promotions.fixture.yml'),
    );
    const request: ListPromotionsRequest = {};
    const response: ListPromotionsResponse = {
      code: 200,
      message: '',
      error: false,
      data: [
        {
          email: 'mako1@list.edu',
          name: 'mako1',
          status: 1,
          createdAt: '21:02:05 14/11/2021',
          lastUpdateAt: '21:02:05 14/11/2021',
        },
        {
          email: 'mako2@list.edu',
          name: 'mako2',
          status: 1,
          createdAt: '21:02:05 14/11/2021',
          lastUpdateAt: '21:02:05 14/11/2021',
        },
        {
          email: 'mako3@list.edu',
          name: 'mako3',
          status: 2,
          createdAt: '21:02:05 14/11/2021',
          lastUpdateAt: '21:02:05 14/11/2021',
        },
        {
          email: 'mako4@list.edu',
          name: 'mako4',
          status: 2,
          createdAt: '21:02:05 14/11/2021',
          lastUpdateAt: '21:02:05 14/11/2021',
        },
      ],
    };
    return supertest(app.getHttpServer())
      .get('/promotions')
      .send(request)
      .expect(200)
      .expect(response);
  });
});
