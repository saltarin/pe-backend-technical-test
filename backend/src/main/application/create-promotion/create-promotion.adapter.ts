import { Promotion } from '@/domain/promotion.entity';
import { BaseExceptionResponse } from '@/shared/application/exception-response';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { convertToUtc, formatDatetime } from '@/shared/dayjs';
import { TypeORMError } from 'typeorm';
import { CreatePromotionResponse } from './create-promotion.response';

export class CreatePromotionAdapter {
  static toResponse(promotion: Promotion): CreatePromotionResponse {
    const createdAt = formatDatetime(
      convertToUtc(promotion.updatedAt.getTime(), -5),
    );
    return {
      code: HttpStatus.CREATED,
      message: 'Ok',
      error: false,
      data: {
        code: promotion.promoCode,
        email: promotion.email,
        name: promotion.name,
        createdAt,
      },
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
      response.message = 'No se pudo crear el registro';
      response.code = HttpStatus.INTERNAL_SERVER_ERROR;
      return new InternalServerErrorException(response);
    }
    response.message = 'Error Interno';
    response.code = HttpStatus.INTERNAL_SERVER_ERROR;
    return new InternalServerErrorException(response);
  }
}
