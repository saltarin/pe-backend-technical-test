import { IsEmail, IsString } from 'class-validator';

export class ExchangePromotionRequest {
  @IsString()
  @IsEmail()
  email: string;
}
