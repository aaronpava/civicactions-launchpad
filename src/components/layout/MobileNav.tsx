import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { navGroups, navSingles } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    setActiveGroup(null);
    triggerRef.current?.focus();
  };

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (nodes.length === 0) return;
      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const group = navGroups.find((g) => g.id === activeGroup);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="nav-label border border-navy px-4 py-2.5 text-navy"
      >
        Open Menu
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/60"
            onClick={close}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed right-0 top-0 z-50 h-dvh w-4/5 overflow-y-auto bg-white shadow-2xl"
          >
            <div className="flex justify-end px-5 pt-5">
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="p-2 text-ink"
              >
                <X aria-hidden="true" className="size-8" strokeWidth={2.5} />
              </button>
            </div>

            {group ? (
              <div className="px-8 pb-12 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveGroup(null)}
                  className="nav-label flex items-center gap-2 py-3 text-red"
                >
                  <ChevronLeft aria-hidden="true" className="size-4" /> Back
                </button>
                <h2 className="mt-2 font-serif text-[28px] leading-snug text-ink">
                  {group.label}
                </h2>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li key={item.label} className="border-b border-gray-300">
                      <Link
                        to={item.to}
                        onClick={close}
                        className="block py-4 font-serif text-[22px] leading-snug text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="px-8 pb-12 pt-4">
                {navGroups.map((g) => (
                  <li key={g.id} className="border-b border-gray-300">
                    <button
                      type="button"
                      aria-expanded={activeGroup === g.id}
                      aria-controls="mobile-menu"
                      onClick={() => setActiveGroup(g.id)}
                      className="flex w-full items-center justify-between py-5 text-left font-serif text-[28px] leading-snug text-ink"
                    >
                      {g.label}
                      <ChevronRight
                        aria-hidden="true"
                        className="size-7 shrink-0"
                        strokeWidth={2.5}
                      />
                    </button>
                  </li>
                ))}
                {[...navSingles, { label: "Contact", to: "/contact" }].map((item) => (
                  <li key={item.label} className="border-b border-gray-300">
                    <Link
                      to={item.to}
                      onClick={close}
                      className="block py-5 font-serif text-[28px] leading-snug text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
