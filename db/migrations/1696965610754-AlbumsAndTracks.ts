import { MigrationInterface, QueryRunner } from "typeorm";

export class AlbumsAndTracks1696965610754 implements MigrationInterface {
    name = 'AlbumsAndTracks1696965610754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "album_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "durationSec" integer, "description" character varying, "artistId" integer, CONSTRAINT "PK_319a74c2085b42849b15412a3bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "track_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "durationSec" integer, "description" character varying, "artistId" integer, "albumId" integer, CONSTRAINT "PK_9cc0e8a743e689434dac0130098" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "album_entity" ADD CONSTRAINT "FK_4aea5943406bd89eced202b012b" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "track_entity" ADD CONSTRAINT "FK_3cfbf55ef8a58b6447c226d2260" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "track_entity" ADD CONSTRAINT "FK_f75df6098780938c05b7a65d2ca" FOREIGN KEY ("albumId") REFERENCES "album_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "track_entity" DROP CONSTRAINT "FK_f75df6098780938c05b7a65d2ca"`);
        await queryRunner.query(`ALTER TABLE "track_entity" DROP CONSTRAINT "FK_3cfbf55ef8a58b6447c226d2260"`);
        await queryRunner.query(`ALTER TABLE "album_entity" DROP CONSTRAINT "FK_4aea5943406bd89eced202b012b"`);
        await queryRunner.query(`DROP TABLE "track_entity"`);
        await queryRunner.query(`DROP TABLE "album_entity"`);
    }

}
