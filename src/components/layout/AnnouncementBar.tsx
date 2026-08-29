import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "ca-announcement-dismissed";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  if (dismissed) return null;

  return (
    <div className="w-full bg-navy text-white">
      <div className="container-1200 flex items-center justify-between gap-4 py-2.5">
        <p className="min-w-0 text-sm">
          <span className="font-bold uppercase tracking-wide">Looking for DITAP training?</span>{" "}
          <Link
            to="/services/ditap"
            className="text-white underline decoration-1 underline-offset-4 hover:no-underline"
          >
            Start here.
          </Link>
        </p>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => {
            window.localStorage.setItem(STORAGE_KEY, "true");
            setDismissed(true);
          }}
          className="shrink-0 p-1 text-white hover:text-gray-400"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
