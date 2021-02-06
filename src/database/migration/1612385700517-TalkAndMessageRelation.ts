import {MigrationInterface, QueryRunner} from "typeorm";

export class TalkAndMessageRelation1612385700517 implements MigrationInterface {
    name = 'TalkAndMessageRelation1612385700517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `message` ADD `talkId` int NULL");
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_07a34d985369f205b7e8287eb1a` FOREIGN KEY (`talkId`) REFERENCES `talk`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_07a34d985369f205b7e8287eb1a`");
        await queryRunner.query("ALTER TABLE `message` DROP FOREIGN KEY `FK_446251f8ceb2132af01b68eb593`");
        await queryRunner.query("ALTER TABLE `message` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `message` ADD CONSTRAINT `FK_446251f8ceb2132af01b68eb593` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `message` DROP COLUMN `talkId`");
    }

}
