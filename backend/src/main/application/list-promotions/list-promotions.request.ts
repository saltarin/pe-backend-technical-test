import { PromotionStatus } from '@/domain/promotion-status';
import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

export class ListPromotionsRequest {
  @IsOptional()
  @IsIn([PromotionStatus.GENERATED, PromotionStatus.EXCHANGED])
  status?: PromotionStatus;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;
}
