import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMouse1507914393377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `mouse` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(500) NOT NULL, `height` int(11) NOT NULL) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `mouse`");
    }

}
