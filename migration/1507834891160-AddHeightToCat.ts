import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHeightToCat1507834891160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `test`.`cat` ADD `height` int(11) NOT NULL");
        await queryRunner.query("ALTER TABLE `test`.`cat` CHANGE `name` `name` varchar(500) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `test`.`cat` CHANGE `name` `name` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci");
        await queryRunner.query("ALTER TABLE `test`.`cat` DROP `height`");
    }

}
