import {MigrationInterface, QueryRunner} from "typeorm";

export class true1509305905990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `test`.`cat` CHANGE `id` `id` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `test`.`cat` CHANGE `id` `id` int(11) NOT NULL");
    }

}
