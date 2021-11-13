import { CreatePromotionService } from '@/application/create-promotion/create-promotion.service';
import { Promotion } from '@/domain/promotion.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  MockType,
  repositoryMockFactory,
} from '@/test/mocks/repository-mock-factory';
import { Repository } from 'typeorm';

describe('create-promotion.service.ts', () => {
  let promotionRepositoryMock: MockType<Repository<Promotion>>;
  let service: CreatePromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePromotionService,
        {
          provide: getRepositoryToken(Promotion),
          useFactory: repositoryMockFactory({}),
        },
      ],
    }).compile();
    service = module.get<CreatePromotionService>(CreatePromotionService);
    promotionRepositoryMock = module.get(getRepositoryToken(Promotion));
    promotionRepositoryMock.create = jest.fn();
    promotionRepositoryMock.create.mockImplementation(() =>
      Promise.resolve(new Promotion()),
    );
    promotionRepositoryMock.save = jest.fn();
    promotionRepositoryMock.save.mockImplementation(() =>
      Promise.resolve(new Promotion()),
    );
  });

  it('WHEN createPromotion save THEN return Promotion object', async () => {
    const newPromotion = await service.createPromotion({
      email: 'a@a.com',
      name: 'mako',
    });
    expect(promotionRepositoryMock.create).toBeCalledTimes(1);
    expect(promotionRepositoryMock.save).toBeCalledTimes(1);
    expect(service.createPromotion).not.toThrow(Error);
    expect(newPromotion).toBeInstanceOf(Promotion);
  });

  it('WHEN createPromotion fails THEN throws error', async () => {
    promotionRepositoryMock.create = undefined;
    const newPromotion = await service.createPromotion({
      email: 'a@a.com',
      name: 'mako',
    });
    expect(newPromotion).toBeInstanceOf(Error);
    expect(newPromotion).toBeInstanceOf(TypeError);
    expect(promotionRepositoryMock.save).toBeCalledTimes(0);
  });

  it('WHEN generateCode is invoked THEN generate random string length 10', () => {
    const code = service.generateCode();
    expect(code.length).toBe(10);
  });

  it('WHEN generateCode is invoked THEN generate readable character string', () => {
    const code = service.generateCode();
    expect(code).toMatch(/^[A-Z1-9]+$/i);
  });
});
