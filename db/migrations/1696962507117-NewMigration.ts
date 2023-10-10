import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1696962507117 implements MigrationInterface {
    name = 'NewMigration1696962507117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_confirmation_token_entity" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "token" character varying NOT NULL, "is_expired" boolean NOT NULL DEFAULT false, "expiration_date" TIMESTAMP WITH TIME ZONE, "is_confirmed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a6c500847d0076e34bac656afdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, "profileImageUrl" character varying, "description" character varying, "password_hash" character varying NOT NULL, "is_email_confirmed" boolean NOT NULL, "refresh_token" character varying NOT NULL, "refres_token_expiration_date" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "artist_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "profileImageUrl" character varying, "description" character varying, CONSTRAINT "PK_c6ec16b57b60c8096406808021d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "artist_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "user_confirmation_token_entity"`);
    }

}
