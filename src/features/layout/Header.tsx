import { LayoutTitle } from "@/components/layout";
import { LoggedInButton } from "../auth/LoggedInButton";
import { ModeToggle } from "../theme/ModeToggle";
import { Menu } from "@/features/layout/Menu";

export const Header = async () => {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <LayoutTitle className="font-bold text-lg">
        Plannificateur de vacance
      </LayoutTitle>
      <div>
        <Menu />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <LoggedInButton />
      </div>
    </div>
  );
};
