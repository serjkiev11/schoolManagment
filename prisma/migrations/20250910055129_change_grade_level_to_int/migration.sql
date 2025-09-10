/*
  Warnings:

  - Changed the type of `level` on the `grade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."grade" DROP COLUMN "level",
ADD COLUMN     "level" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "grade_level_key" ON "public"."grade"("level");
