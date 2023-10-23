import { MigrationInterface, QueryRunner } from "typeorm";

export class Images1698088063443 implements MigrationInterface {
    name = 'Images1698088063443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "track_entity" ADD "imageUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "album_entity" ADD "imageUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "album_entity" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "track_entity" DROP COLUMN "imageUrl"`);
    }

}
