import { CreatePromotionAdapter } from '@/application/create-promotion/create-promotion.adapter';
import { CreatePromotionRequest } from '@/application/create-promotion/create-promotion.request';
import { CreatePromotionService } from '@/application/create-promotion/create-promotion.service';
import { ExchangePromotionAdapter } from '@/application/exchange-promotion/exchange-promotion.adapter';
import { ExchangePromotionRequest } from '@/application/exchange-promotion/exchange-promotion.request';
import { ExchangePromotionService } from '@/application/exchange-promotion/exchange-promotion.service';
import { ListPromotionsAdapter } from '@/application/list-promotions/list-promotions.adapter';
import { ListPromotionsRequest } from '@/application/list-promotions/list-promotions.request';
import { ListPromotionsService } from '@/application/list-promotions/list-promotions.service';
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('promotions')
export class PromotionsController {
  constructor(
    private readonly createPromotionService: CreatePromotionService,
    private readonly exchangePromotionService: ExchangePromotionService,
    private readonly listPromotionsService: ListPromotionsService,
  ) {}

  @Post()
  async createPromotion(@Body() request: CreatePromotionRequest) {
    try {
      const promotion = await this.createPromotionService.createPromotion(
        request,
      );
      const response = CreatePromotionAdapter.toResponse(promotion);
      return response;
    } catch (error) {
      const exception = CreatePromotionAdapter.toErrorResponse(error, {});
      throw exception;
    }
  }

  @Patch()
  async exchangePromotion(@Body() request: ExchangePromotionRequest) {
    try {
      const promotion = await this.exchangePromotionService.exchangePromotion(
        request,
      );
      const response = ExchangePromotionAdapter.toResponse(promotion);
      return response;
    } catch (error) {
      const exception = ExchangePromotionAdapter.toErrorResponse(error, {});
      throw exception;
    }
  }

  @Get()
  async listPromotions(@Body() request: ListPromotionsRequest) {
    try {
      const promotion = await this.listPromotionsService.listPromotions(
        request,
      );
      const response = ListPromotionsAdapter.toResponse(promotion);
      return response;
    } catch (error) {
      const exception = ListPromotionsAdapter.toErrorResponse(error, {});
      throw exception;
    }
  }
}
