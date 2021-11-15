import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class ExchangePromotionRequest {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10)
  @MaxLength(10)
  code: string;
}
