import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';

export class TypeormConfig {
  static register(): DynamicModule {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>("DATABASE_HOST"),
        port: configService.get<number>("DATABASE_PORT"),
        schema: configService.get<string>('DATABASE_SCHEMA'),
        database: configService.get<string>('DATABASE_NAME'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: false,
        migrationsRun: false,
      } as ConnectionOptions),
    })
  }
}