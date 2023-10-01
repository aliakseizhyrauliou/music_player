import { table } from "console"
import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class RefreshToken1696175942980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user_entity", new TableColumn({
            name: "refresh_token",
            type: "varchar",
            isNullable: false, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user_entity", "refresh_token");
    }

}
