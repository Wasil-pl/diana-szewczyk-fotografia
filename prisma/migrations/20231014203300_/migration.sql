-- DropForeignKey
ALTER TABLE `picture` DROP FOREIGN KEY `Picture_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Picture` ADD CONSTRAINT `Picture_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
