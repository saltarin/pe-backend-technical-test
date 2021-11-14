import { Promotion } from '@/domain/promotion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListPromotionsRequest } from './list-promotions.request';

@Injectable()
export class ListPromotionsService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionService: Repository<Promotion>,
  ) {}

  async listPromotions(request: ListPromotionsRequest) {
    try {
      const a = await this.promotionService.find({ status: request.status });
      return a;
    } catch (error) {
      throw error;
    }
  }
}
