import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { team, teamRoles, type TeamMember, type TeamRoleGroup } from "@/data/team";
import { TeamAvatar } from "./TeamAvatar";

export function TeamDirectory() {
  const [active, setActive] = useState<TeamRoleGroup[]>([]);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const members = useMemo(
    () => (active.length === 0 ? team : team.filter((m) => active.includes(m.group))),
    [active],
  );

  function toggle(role: TeamRoleGroup) {
    setActive((prev) => (prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]));
  }

  function open(member: TeamMember, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(member);
  }

  function close() {
    setSelected(null);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3" aria-label="Team filters by role" role="group">
        {teamRoles.map((role) => {
          const pressed = active.includes(role);
          return (
            <button
              key={role}
              type="button"
              aria-pressed={pressed}
              onClick={() => toggle(role)}
              className={cn(
                "nav-label border px-4 py-2.5 transition-colors",
                pressed
                  ? "border-red bg-red text-white"
                  : "border-gray-400 bg-white text-navy hover:border-red hover:text-red-dark",
              )}
            >
              {role}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-base text-ink" aria-live="polite">
        Showing {members.length} of {team.length} team members
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <li key={member.slug}>
            <article className="flex h-full flex-col">
              <TeamAvatar name={member.name} className="aspect-square w-full bg-gray-200" />
              <h3 className="mt-4 text-xl">
                <button
                  type="button"
                  className="text-left text-navy underline decoration-1 underline-offset-4 hover:text-red-dark"
                  onClick={(event) => open(member, event.currentTarget)}
                >
                  {member.name}
                  <span className="sr-only"> — read bio</span>
                </button>
              </h3>
              <p className="mt-1 text-base text-ink">{member.role}</p>
            </article>
          </li>
        ))}
      </ul>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close bio"
            tabIndex={-1}
            className="absolute inset-0 bg-navy/70"
            onClick={close}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-dialog-title"
            className="relative w-full max-w-lg bg-white p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 id="team-dialog-title" className="text-2xl text-navy">
                  {selected.name}
                </h2>
                <p className="eyebrow mt-2 text-red-dark">{selected.role}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="text-2xl leading-none text-navy hover:text-red-dark"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close bio</span>
              </button>
            </div>
            <TeamAvatar name={selected.name} className="mt-6 size-24 bg-gray-200" />
            <p className="mt-6 text-base text-ink">{selected.bio}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
