import { ExchangePromotionService } from '@/application/exchange-promotion/exchange-promotion.service';
import { PromotionStatus } from '@/domain/promotion-status';
import { Promotion } from '@/domain/promotion.entity';
import {
  MockType,
  repositoryMockFactory
} from '@/test/mocks/repository-mock-factory';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('create-promotion.service', () => {
  let promotionRepositoryMock: MockType<Repository<Promotion>>;
  let service: ExchangePromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExchangePromotionService,
        {
          provide: getRepositoryToken(Promotion),
          useFactory: repositoryMockFactory({}),
        },
      ],
    }).compile();
    service = module.get<ExchangePromotionService>(ExchangePromotionService);
    promotionRepositoryMock = module.get(getRepositoryToken(Promotion));
    promotionRepositoryMock.findOne = jest.fn();
    promotionRepositoryMock.save = jest.fn();
  });

  it('WHEN exchangePromotion no find  THEN throw an error', () => {
    promotionRepositoryMock.findOne.mockImplementation(() => Promise.resolve(undefined));
    expect(service.exchangePromotion).rejects.toThrow(Error)
  });

  it('WHEN exchangePromotion can\'t save status THEN throw an error', async () => {
    promotionRepositoryMock.findOne.mockImplementation(() => Promise.resolve({status: PromotionStatus.GENERATED} as Promotion));
    promotionRepositoryMock.save.mockImplementation(() => { throw new Error() });
    expect(service.exchangePromotion).rejects.toThrow(Error);
    const request = { email: 'a@a.com' };
    const updatedPromotion = await service.exchangePromotion(request);
    expect(promotionRepositoryMock.findOne).toBeCalledTimes(1);
    expect(updatedPromotion).toBeInstanceOf(Error);
  });

  it('WHEN exchangePromotion save status THEN return promotion', async () => {
    promotionRepositoryMock.findOne.mockImplementation(() => new Promotion());
    promotionRepositoryMock.save.mockImplementation(() => new Promotion());
    const request = { email: 'a@a.com' };
    const updatedPromotion = await service.exchangePromotion(request);
    expect(updatedPromotion).toBeInstanceOf(Promotion);
  });
});
