import { PromotionStatus } from '@/domain/promotion-status';
import { IsEnum } from 'class-validator';

export class ListPromotionsRequest {
  @IsEnum(PromotionStatus)
  status: PromotionStatus;
}
