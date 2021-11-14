import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  schema: process.env.DATABASE_SCHEMA,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [__dirname + '/../src/entities/*{.ts,.js}'],
  migrations: [__dirname + '/../src/migrations/*{.ts,.js}'],
  logging: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = typeOrmConfig;
