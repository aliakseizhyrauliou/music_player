import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserConfirmationTokenInit1695805243084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'user_confirmation_token_entity',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'user_id',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'token',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'is_expired',
                type: 'boolean',
                default: false,
              },
              {
                name: 'expiration_date',
                type: 'timestamptz',
                isNullable: true,
              },
              {
                name: 'is_confirmed',
                type: 'boolean',
                default: false,
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_confirmation_token_entity');
    }

}
