/*
  Warnings:

  - Added the required column `package` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `package` ENUM('BRONZE', 'SILVER', 'GOLD') NOT NULL;
