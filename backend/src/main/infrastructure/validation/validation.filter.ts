/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseResponse } from '@/shared/application/base-response';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationException } from './validation-exception';

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.BAD_REQUEST;
    const serviceResponse: BaseResponse<object> = {
      code: status,
      message: exception.message,
      error: true,
      data: exception.extra,
    };
    response.status(status).json(serviceResponse);
  }
}
