import { LayoutTitle } from "@/components/layout";
import { LoggedInButton } from "../auth/LoggedInButton";
import { SignInButton } from "../auth/SignInButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <LayoutTitle className="font-bold text-lg">Vacation planner</LayoutTitle>
      <div>
        <ModeToggle />
        <LoggedInButton />
      </div>
    </div>
  );
};
