import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterColumnStatusIn1612375208208 implements MigrationInterface {
    name = 'AlterColumnStatusIn1612375208208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` ADD `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` ADD `status` tinyint NOT NULL");
    }

}
