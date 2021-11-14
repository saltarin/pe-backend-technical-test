import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_MIGRATION_HOST,
  port: parseInt(process.env.DATABASE_MIGRATION_PORT),
  schema: process.env.DATABASE_MIGRATION_SCHEMA,
  database: process.env.DATABASE_MIGRATION_NAME,
  username: process.env.DATABASE_MIGRATION_USER,
  password: process.env.DATABASE_MIGRATION_PASSWORD,
  entities: [__dirname + '/../src/entities/*{.ts,.js}'],
  migrations: [__dirname + '/../src/migrations/*{.ts,.js}'],
  logging: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = typeOrmConfig;
