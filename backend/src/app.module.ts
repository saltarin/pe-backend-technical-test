import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfig } from './config/typeorm.config';
import { MainModule } from './main/main.module';
import { AppController } from './presentation/app.controller';
import { SharedModule } from './shared/shared.module';
import { PromotionsController } from './presentation/promotions.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeormConfig.register(),
    MainModule,
    SharedModule,
  ],
  controllers: [AppController, PromotionsController],
  providers: [],
})
export class AppModule {}
