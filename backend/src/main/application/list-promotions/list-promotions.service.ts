import { PromotionStatus } from '@/domain/promotion-status';
import { Promotion } from '@/domain/promotion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListPromotionsService {
  constructor(
    @InjectRepository(Promotion) private readonly promotionService: Repository<Promotion>
  ) {}

  async listPromotions(status: PromotionStatus) {
    try {
      const a = await this.promotionService.find({status});
      return a;
    } catch (error) {
      throw error;
    }
  }
}
