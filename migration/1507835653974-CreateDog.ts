import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDog1507835653974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `dog` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(500) NOT NULL, `height` int(11) NOT NULL) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `dog`");
    }

}
