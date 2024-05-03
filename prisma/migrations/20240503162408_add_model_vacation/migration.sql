-- AlterTable
ALTER TABLE "User" ADD COLUMN     "surname" TEXT;

-- CreateTable
CREATE TABLE "Vacation" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "images" TEXT[],
    "startDate" TEXT,
    "endDate" TEXT,

    CONSTRAINT "Vacation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vacation" ADD CONSTRAINT "user_fk" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
