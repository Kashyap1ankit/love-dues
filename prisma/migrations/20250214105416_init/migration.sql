-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "exName" TEXT NOT NULL,
    "timeInvested" INTEGER NOT NULL,
    "moneySpent" INTEGER NOT NULL,
    "emotionalDamage" INTEGER NOT NULL,
    "betrayal" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "compensation" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);
