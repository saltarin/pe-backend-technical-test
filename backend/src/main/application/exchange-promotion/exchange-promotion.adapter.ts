import { Promotion } from '@/domain/promotion.entity';
import { BaseExceptionResponse } from '@/shared/application/exception-response';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { convertToUtc, formatDatetime } from '@/shared/dayjs';
import { TypeORMError } from 'typeorm';
import { ExchangePromotionResponse } from './exchange-promotion.response';

export class ExchangePromotionAdapter {
  static toResponse(promotion: Promotion): ExchangePromotionResponse {
    const updatedAt = formatDatetime(
      convertToUtc(promotion.updatedAt.getTime(), -5),
    );
    return {
      code: HttpStatus.OK,
      message: '',
      error: false,
      data: {
        code: promotion.promoCode,
        email: promotion.email,
        name: promotion.name,
        updatedAt,
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
    if (error.message === 'Promotion not found') {
      response.message = 'No se encontro la promocion';
      response.code = HttpStatus.NOT_FOUND;
      return new NotFoundException(response);
    }
    if (error.message === 'Promotion already exchanged') {
      response.message = 'La promocion ya fue canjeada';
      response.code = HttpStatus.BAD_REQUEST;
      return new NotFoundException(response);
    }
    if (error.message === 'Promotion code invalid') {
      response.message = 'El codigo es invalido';
      response.code = HttpStatus.BAD_REQUEST;
      return new NotFoundException(response);
    }
    if (error instanceof TypeORMError) {
      response.message = 'No se pudo actualizar el registro';
      response.code = HttpStatus.INTERNAL_SERVER_ERROR;
      return new InternalServerErrorException(response);
    }

    response.message = 'Error Interno';
    response.code = HttpStatus.INTERNAL_SERVER_ERROR;
    return new InternalServerErrorException(response);
  }
}
