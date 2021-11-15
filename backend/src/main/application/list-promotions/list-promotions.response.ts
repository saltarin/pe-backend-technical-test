import { BaseResponse } from 'src/shared/application/base-response';

export interface PromotionData {
  email: string;
  name: string;
  code: string;
  status: number;
  createdAt: string;
  lastUpdateAt: string;
}

export class ListPromotionsResponse extends BaseResponse<PromotionData[]> {}
