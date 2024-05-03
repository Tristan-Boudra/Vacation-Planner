import { LayoutTitle } from "@/components/layout";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div>
      <LayoutTitle>
        Créer ta futur destination de vacance dès maintenant !
      </LayoutTitle>
    </div>
  );
}
