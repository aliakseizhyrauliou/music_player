import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ArtistInit1695805041521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'artist_entity',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'profileImageUrl',
                type: 'varchar',
                isNullable: true,
              },
              {
                name: 'description',
                type: 'text',
                isNullable: true,
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('artist_entity');
    }

}
