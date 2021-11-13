import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePromotion1636746577414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE "pe"."promotion" (
          id SERIAL PRIMARY KEY,
          email VARCHAR(360) UNIQUE,
          name VARCHAR(250),
          promo_code VARCHAR(15),
          status INTEGER,
          created_at timestamp,
          updated_at timestamp
        );
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        drop table "pe"."promotion";
      `);
    }

}
