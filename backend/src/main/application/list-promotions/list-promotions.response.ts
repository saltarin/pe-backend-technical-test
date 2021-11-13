import { BaseResponse } from 'src/shared/application/base-response';

export interface PromotionData {
  email: string;
  name: string;
  promoCode: string;
  status: number;
  createdAt: string;
  lastUpdateAt: string;
}

export class ListPromotionsResponse extends BaseResponse<PromotionData[]> {}
