import { Promotion } from '@/domain/promotion.entity';
import { BaseExceptionResponse } from '@/shared/application/exception-response';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { convertToUtc, formatDatetime } from '@/shared/dayjs';
import { TypeORMError } from 'typeorm';
import { ListPromotionsResponse } from './list-promotions.response';

export class ListPromotionsAdapter {
  static toResponse(promotions: Promotion[]): ListPromotionsResponse {
    return {
      code: HttpStatus.OK,
      message: '',
      error: false,
      data: promotions.map(promotion => {
        const createdAt = formatDatetime(
          convertToUtc(promotion.createdAt.getTime(), -5),
        );
        const lastUpdateAt = formatDatetime(
          convertToUtc(promotion.updatedAt.getTime(), -5),
        );
        return {
          email: promotion.email,
          name: promotion.name,
          code: promotion.promoCode,
          status: promotion.status,
          createdAt,
          lastUpdateAt,
        };
      }),
    };
  }
  static toErrorResponse(
    error: Error,
    extra: Record<string, any>,
  ): HttpException {
    const response: BaseExceptionResponse = {
      error: true,
      data: extra,
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: '',
    };

    if (error instanceof TypeORMError) {
      response.message = 'No se pudo obtener las promociones';
      response.code = HttpStatus.INTERNAL_SERVER_ERROR;
      return new InternalServerErrorException(response);
    }

    response.message = 'Error Interno';
    response.code = HttpStatus.INTERNAL_SERVER_ERROR;
    return new InternalServerErrorException(response);
  }
}
