import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePromotion1636746577414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE TABLE "pe"."promotion" (
          id int primary key,
          email varchar(360),
          name varchar(250),
          promo_code varchar(15),
          status int,
          create_at timestamp
        );
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        drop table "pe"."promotion";
      `);
    }

}
