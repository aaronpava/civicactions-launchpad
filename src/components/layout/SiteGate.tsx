import { useEffect, useRef, useState, type FormEvent } from "react";
import { CivicActionsLogo } from "@/components/CivicActionsLogo";

const STORAGE_KEY = "ca-site-unlocked";

export function SiteGate() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  useEffect(() => {
    if (unlocked === false) inputRef.current?.focus();
  }, [unlocked]);

  // Lock scroll while the overlay is up.
  useEffect(() => {
    if (unlocked === false) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [unlocked]);

  if (unlocked !== false) return null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value ?? "";
    if (value === import.meta.env.VITE_SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-gate-heading"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy px-5"
    >
      <div className="w-full max-w-sm">
        <CivicActionsLogo className="h-auto w-[200px] text-white" />
        <h1 id="site-gate-heading" className="mt-8 font-serif text-2xl text-white">
          This site is private
        </h1>
        <p className="mt-2 text-white">
          Enter the password to continue.
        </p>
        <form onSubmit={onSubmit} className="mt-6" noValidate>
          <label htmlFor="site-gate-password" className="nav-label text-white">
            Password
          </label>
          <input
            ref={inputRef}
            id="site-gate-password"
            name="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={error || undefined}
            aria-describedby={error ? "site-gate-error" : undefined}
            className="mt-2 w-full border border-white bg-transparent px-4 py-3 text-white focus-visible:outline-2 focus-visible:outline-white"
          />
          {error && (
            <p id="site-gate-error" role="alert" className="mt-2 text-sm font-bold text-white">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="nav-label mt-4 inline-flex w-full items-center justify-center bg-red px-6 py-3.5 text-white transition-colors hover:bg-red-dark"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
