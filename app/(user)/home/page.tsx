import { requiredCurrenUser } from "@/auth/current-user";
import { LayoutTitle } from "@/components/layout";
import { GridCard } from "@/features/GridCard";
import { Spacing } from "@/features/layout/Spacing";
import { prisma } from "@/prisma";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await requiredCurrenUser();

  const getName = await prisma.user.findMany({
    where: {
      id: user.id,
    },
    select: {
      name: true,
    },
  });

  return (
    <div>
      <Spacing size="sm" />
      <LayoutTitle>
        Salut {getName[0].name} 👋 Voici la liste de tes vacances 🌴
      </LayoutTitle>
      <Spacing size="md" />
      <GridCard />
    </div>
  );
}
