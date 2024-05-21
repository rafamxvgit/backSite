/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `curso` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departamento` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "departamento" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
