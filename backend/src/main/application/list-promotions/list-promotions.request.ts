import { PromotionStatus } from '@/domain/promotion-status';
import { IsEnum, IsOptional } from 'class-validator';

export class ListPromotionsRequest {
  @IsOptional()
  @IsEnum(PromotionStatus)
  status?: PromotionStatus;
}
