import { ListPromotionsService } from '@/application/list-promotions/list-promotions.service';
import { PromotionStatus } from '@/domain/promotion-status';
import { Promotion } from '@/domain/promotion.entity';
import {
  MockType,
  repositoryMockFactory,
} from '@/test/mocks/repository-mock-factory';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('list-promotions.service', () => {
  let promotionRepositoryMock: MockType<Repository<Promotion>>;
  let service: ListPromotionsService;
  const listWithDataGenerated = [
    {
      id: 1,
      email: 'mako@pe.com',
      name: 'marcos ch.',
      promoCode: 'XASDQWERTY',
      status: PromotionStatus.GENERATED,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      email: 'jose@pe.com',
      name: 'jose pe.',
      promoCode: 'X23DQ9ERTY',
      status: PromotionStatus.GENERATED,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];
  const listWithDataExchanged = [
    {
      id: 3,
      email: 'artosis@pe.com',
      name: 'artosis sc',
      promoCode: 'XASDQWERTY',
      status: PromotionStatus.EXCHANGED,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];
  const listWithDataMixed = [
    ...listWithDataGenerated,
    ...listWithDataExchanged,
  ];
  const motherOfObjects = {
    listWithDataGenerated,
    listWithDataExchanged,
    listWithDataMixed,
    listWithDataEmpty: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListPromotionsService,
        {
          provide: getRepositoryToken(Promotion),
          useFactory: repositoryMockFactory({}),
        },
      ],
    }).compile();
    service = module.get<ListPromotionsService>(ListPromotionsService);
    promotionRepositoryMock = module.get(getRepositoryToken(Promotion));
    promotionRepositoryMock.find = jest.fn();
  });

  it('WHEN listPromotions invoked with data THEN return array values filtered', async () => {
    promotionRepositoryMock.find.mockImplementation(({ status }) => {
      switch (status) {
        case PromotionStatus.EXCHANGED:
          return Promise.resolve(motherOfObjects.listWithDataExchanged);
        case PromotionStatus.GENERATED:
          return Promise.resolve(motherOfObjects.listWithDataGenerated);
        default:
          return Promise.resolve(motherOfObjects.listWithDataMixed);
      }
    });

    let status = PromotionStatus.GENERATED;
    let promotions = await service.listPromotions({ status });
    expect(promotions.length).toBe(2);
    promotions.forEach(promotion =>
      expect(promotion.status).toBe(PromotionStatus.GENERATED),
    );

    status = PromotionStatus.EXCHANGED;
    promotions = await service.listPromotions({ status });
    expect(promotions.length).toBe(1);
    promotions.forEach(promotion =>
      expect(promotion.status).toBe(PromotionStatus.EXCHANGED),
    );

    status = undefined;
    promotions = await service.listPromotions({ status: null });
    expect(promotions.length).toBe(3);
    promotions.forEach(promotion =>
      expect([PromotionStatus.GENERATED, PromotionStatus.EXCHANGED]).toContain(
        promotion.status,
      ),
    );
  });

  it('WHEN listPromotions invoked without data THEN return empty array', async () => {
    promotionRepositoryMock.find.mockImplementation(() => []);
    const status = PromotionStatus.GENERATED;
    const promotions = await service.listPromotions({ status });
    expect(promotions.length).toBe(0);
  });

  it('WHEN listPromotions fails THEN throw error', async () => {
    promotionRepositoryMock.find.mockImplementation(() => {
      throw new Error();
    });
    expect(service.listPromotions).rejects.toThrow(TypeError);
  });
});
