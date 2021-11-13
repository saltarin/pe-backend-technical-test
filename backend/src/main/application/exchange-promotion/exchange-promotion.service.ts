import { PromotionStatus } from '@/domain/promotion-status';
import { Promotion } from '@/domain/promotion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangePromotionRequest } from './exchange-promotion.request';

@Injectable()
export class ExchangePromotionService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionService: Repository<Promotion>,
  ) {}

  public async exchangePromotion(request: ExchangePromotionRequest) {
    try {
      const promotion = await this.promotionService.findOne({
        email: request.email,
      });
      if (!promotion) {
        throw new Error('Promotion not found');
      }
      promotion.status = PromotionStatus.EXCHANGED;
      return await this.promotionService.save(promotion);
    } catch (error) {
      return error;
    }
  }
}
