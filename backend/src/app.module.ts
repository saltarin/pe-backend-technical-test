import { Module } from '@nestjs/common';
import { AppController } from './presentation/app.controller';
import { AppService } from './main/application/app.service';
import { MainModule } from './main/main.module';
import { TypeormConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeormConfig.register(),
    MainModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
