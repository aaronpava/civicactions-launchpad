import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { navGroups, navSingles } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openId]);

  return (
    <nav ref={navRef} aria-label="Main menu" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navGroups.map((group) => {
          const open = openId === group.id;
          return (
            <li key={group.id} className="relative">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={group.id}
                onClick={() => setOpenId(open ? null : group.id)}
                className="nav-label flex items-center gap-2 py-2 text-navy hover:text-red"
              >
                {group.label}
                {open ? (
                  <ChevronDown aria-hidden="true" className="size-4" />
                ) : (
                  <ChevronUp aria-hidden="true" className="size-4" />
                )}
              </button>
              <ul
                id={group.id}
                hidden={!open}
                className="absolute left-0 top-full z-50 min-w-[19rem] bg-white py-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className={cn(item.dividerAbove && "mt-3 border-t border-gray-400 pt-3")}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpenId(null)}
                      className="nav-label block px-7 py-2.5 text-navy hover:text-red"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
        {navSingles.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="nav-label block py-2 text-navy hover:text-red">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
