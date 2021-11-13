import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePromotionService } from './application/create-promotion/create-promotion.service';
import { ExchangePromotionService } from './application/exchange-promotion/exchange-promotion.service';
import { ListPromotionsService } from './application/list-promotions/list-promotions.service';
import { Promotion } from './domain/promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion])],
  providers: [
    CreatePromotionService,
    ExchangePromotionService,
    ListPromotionsService,
  ],
  exports: [
    CreatePromotionService,
    ExchangePromotionService,
    ListPromotionsService,
  ],
})
export class MainModule {}
