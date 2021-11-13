import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreatePromotionRequest {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  @MaxLength(250)
  name: string;
}