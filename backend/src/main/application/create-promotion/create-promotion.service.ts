import { PromotionStatus } from '@/domain/promotion-status';
import { Promotion } from '@/domain/promotion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromotionRequest } from './create-promotion.request';

@Injectable()
export class CreatePromotionService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionService: Repository<Promotion>
  ) {}

  public async createPromotion(request: CreatePromotionRequest) {
    try {
      const newPromotion = this.promotionService.create({
        email: request.email,
        name: request.name,
        status: PromotionStatus.GENERATED
      });
      return await this.promotionService.save(newPromotion);
    } catch (error) {
      return error;
    }
  }

  public generateCode(): string {
    const codeLength = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    const charactersLength = characters.length;
    const randomCharacterReducer = (current, next) => {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      return current + characters[randomIndex];
    };
    const code = [...Array(codeLength)].reduce(randomCharacterReducer, '');
    return code;
  }
}
