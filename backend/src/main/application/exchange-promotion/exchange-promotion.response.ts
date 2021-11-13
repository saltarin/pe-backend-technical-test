import { BaseResponse } from "src/shared/application/base-response";

interface Data {
  code: string;
  email: string;
  name: string;
  updatedAt: string;
}

export class ExchangePromotionResponse extends BaseResponse<Data> {}