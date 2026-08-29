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
            className="fixed right-0 top-0 z-50 h-dvh w-4/5 overflow-y-auto bg-white"
          >
            <div className="flex justify-end p-4">
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="p-2 text-navy"
              >
                <X aria-hidden="true" className="size-7" />
              </button>
            </div>

            {group ? (
              <div className="px-6 pb-10">
                <button
                  type="button"
                  onClick={() => setActiveGroup(null)}
                  className="nav-label flex items-center gap-2 py-3 text-red"
                >
                  <ChevronLeft aria-hidden="true" className="size-4" /> Back
                </button>
                <h2 className="font-serif text-[28px] text-navy">{group.label}</h2>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li key={item.label} className="border-b border-gray-400">
                      <Link
                        to={item.to}
                        onClick={close}
                        className="block py-4 font-serif text-xl text-navy"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="px-6 pb-10">
                {navGroups.map((g) => (
                  <li key={g.id} className="border-b border-gray-400">
                    <button
                      type="button"
                      aria-expanded={false}
                      aria-controls="mobile-menu"
                      onClick={() => setActiveGroup(g.id)}
                      className="flex w-full items-center justify-between py-4 font-serif text-[28px] text-navy"
                    >
                      {g.label}
                      <ChevronRight aria-hidden="true" className="size-6" />
                    </button>
                  </li>
                ))}
                {[...navSingles, { label: "Contact", to: "/contact" }].map((item) => (
                  <li key={item.label} className="border-b border-gray-400">
                    <Link
                      to={item.to}
                      onClick={close}
                      className="block py-4 font-serif text-[28px] text-navy"
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
