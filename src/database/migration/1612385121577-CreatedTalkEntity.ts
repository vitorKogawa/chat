import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedTalkEntity1612385121577 implements MigrationInterface {
    name = 'CreatedTalkEntity1612385121577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `talk` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_talk` (`userId` int NOT NULL, `talkId` int NOT NULL, INDEX `IDX_ea3ddd2851c5a370fef865b723` (`userId`), INDEX `IDX_d903f70a074d3ead2c687c6112` (`talkId`), PRIMARY KEY (`userId`, `talkId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` ADD `isEnabled` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `isAdm` int NOT NULL");
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_talk` ADD CONSTRAINT `FK_ea3ddd2851c5a370fef865b7237` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_talk` ADD CONSTRAINT `FK_d903f70a074d3ead2c687c6112a` FOREIGN KEY (`talkId`) REFERENCES `talk`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_talk` DROP FOREIGN KEY `FK_d903f70a074d3ead2c687c6112a`");
        await queryRunner.query("ALTER TABLE `user_talk` DROP FOREIGN KEY `FK_ea3ddd2851c5a370fef865b7237`");
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isAdm`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isEnabled`");
        await queryRunner.query("ALTER TABLE `user` ADD `status` int NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_d903f70a074d3ead2c687c6112` ON `user_talk`");
        await queryRunner.query("DROP INDEX `IDX_ea3ddd2851c5a370fef865b723` ON `user_talk`");
        await queryRunner.query("DROP TABLE `user_talk`");
        await queryRunner.query("DROP TABLE `talk`");
    }

}
