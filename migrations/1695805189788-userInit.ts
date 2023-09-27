import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserInit1695805189788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'user_entity',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'email',
                type: 'varchar',
                isNullable: false,
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
              {
                name: 'password_hash',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'is_email_confirmed',
                type: 'boolean',
                default: false,
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_entity');
    }

}
