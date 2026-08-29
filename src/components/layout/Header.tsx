import { Wordmark } from "./Wordmark";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ButtonLink } from "@/components/brand/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container-1200 flex items-center justify-between gap-6 py-5">
        <Wordmark />
        <div className="flex items-center gap-8">
          <DesktopNav />
          <ButtonLink to="/contact" tone="red" className="hidden lg:inline-flex">
            Contact us
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
