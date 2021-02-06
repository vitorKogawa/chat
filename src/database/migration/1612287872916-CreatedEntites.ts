import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedEntites1612287872916 implements MigrationInterface {
    name = 'CreatedEntites1612287872916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `message` (`id` int NOT NULL AUTO_INCREMENT, `message` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("DROP TABLE `message`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
