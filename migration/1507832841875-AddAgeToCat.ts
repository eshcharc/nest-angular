import {MigrationInterface, QueryRunner, TableColumn, Table} from "typeorm";

export class AddAgeToCat1507832841875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('cat', new TableColumn({ name: 'age', type: 'integer'}));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(new Table('cat'), new TableColumn({ name: 'age'}))
    }

}
