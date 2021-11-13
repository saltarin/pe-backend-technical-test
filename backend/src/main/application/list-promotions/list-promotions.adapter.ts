import { Promotion } from "@/domain/promotion.entity";
import { convertToUtc, formatDatetime } from "src/shared/dayjs";
import { ListPromotionsResponse, PromotionData } from "./list-promotions.response";

export class ListPromotionsAdapter {
  static toResponse(promotions: Promotion[], code, message, error): ListPromotionsResponse {
    return {
      code,
      message,
      error,
      data: promotions.map(promotion => {
        const createdAt = formatDatetime(convertToUtc(promotion.createdAt, -5));
        const lastUpdateAt = formatDatetime(convertToUtc(promotion.updatedAt, -5));
        return {
          email: promotion.email,
          name: promotion.name,
          promoCode: promotion.promoCode,
          status: promotion.status,
          createdAt,
          lastUpdateAt
        }
      })
    }
  }
}