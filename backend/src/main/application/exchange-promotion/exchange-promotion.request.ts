import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class ExchangePromotionRequest {
  @IsString()
  @IsEmail()
  email: string;
}