import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCat1507735653904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `cat` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(500) NOT NULL) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `cat`");
    }

}
