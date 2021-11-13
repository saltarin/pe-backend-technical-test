import { BaseResponse } from "src/shared/application/base-response";

interface Data {
  code: string;
  email: string;
  name: string;
  createdAt: string;
}

export class CreatePromotionResponse extends BaseResponse<Data> {}