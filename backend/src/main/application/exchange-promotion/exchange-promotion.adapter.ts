import { Promotion } from "@/domain/promotion.entity";
import { convertToUtc, formatDatetime } from "src/shared/dayjs";
import { ExchangePromotionResponse } from "./exchange-promotion.response";

export class ExchangePromotionAdapter {
  static toResponse(promotion: Promotion, code, message, error): ExchangePromotionResponse {
    const updatedAt = formatDatetime(convertToUtc(promotion.updatedAt, -5));
    return {
      code,
      message,
      error,
      data: {
        code: promotion.promoCode,
        email: promotion.email,
        name: promotion.name,
        updatedAt
      }
    }
  }
}