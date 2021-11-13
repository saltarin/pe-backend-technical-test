import { Promotion } from '@/domain/promotion.entity';
import { convertToUtc, formatDatetime } from 'src/shared/dayjs';
import { CreatePromotionResponse } from './create-promotion.response';

export class CreatePromotionAdapter {
  static toResponse(
    promotion: Promotion,
    code,
    message,
    error,
  ): CreatePromotionResponse {
    const createdAt = formatDatetime(convertToUtc(promotion.updatedAt, -5));
    return {
      code,
      message,
      error,
      data: {
        code: promotion.promoCode,
        email: promotion.email,
        name: promotion.name,
        createdAt,
      },
    };
  }
}
