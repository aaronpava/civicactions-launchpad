import type { SocialLink } from "@/data/footer";

const paths: Record<SocialLink["icon"], string> = {
  vimeo:
    "M22 7.4c-.1 2.1-1.6 5-4.4 8.6-2.9 3.8-5.4 5.7-7.4 5.7-1.3 0-2.3-1.2-3.2-3.5L5.4 13c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.6.9L1 9.2c1-.9 1.9-1.7 2.9-2.6C5.2 5.4 6.1 4.9 6.7 4.8c1.4-.1 2.2.8 2.6 2.8.4 2.2.6 3.5.8 4.1.4 2 .9 3 1.4 3 .4 0 1-.6 1.8-1.9.8-1.3 1.2-2.3 1.3-3 .1-1.1-.3-1.6-1.3-1.6-.5 0-1 .1-1.5.3.9-3.1 2.7-4.6 5.4-4.5 2 .1 2.9 1.4 2.8 4.4z",
  bluesky:
    "M12 10.8C10.9 8.7 7.9 4.7 5.1 2.7 2.4.8 1.4 1.1 .8 1.4 0 1.8 0 3 0 3.8s.4 6.6.7 7.6c.9 3.2 4.3 4.3 7.4 4-.2 0-.4.1-.6.1-2.9.4-5.5 1.5-2.1 5.3 3.7 3.8 5.1-.8 5.8-3.2.2-.7.3-1 .4-1 .1 0 .2.3.4 1 .7 2.4 2.1 7 5.8 3.2 3.4-3.8.8-4.9-2.1-5.3-.2 0-.4-.1-.6-.1 3.1.3 6.5-.8 7.4-4 .3-1 .7-6.8.7-7.6s0-2-.8-2.4c-.6-.3-1.6-.6-4.3 1.3C16.1 4.7 13.1 8.7 12 10.8z",
  x: "M17.2 3h2.9l-6.3 7.2L21 21h-5.6l-4.4-5.7L5.9 21H3l6.7-7.7L3 3h5.7l4.1 5.4L17.2 3zm-1 16.2h1.6L7.7 4.7H6L16.2 19.2z",
  linkedin:
    "M6.9 8.6H3.6V21h3.3V8.6zM5.2 3A1.9 1.9 0 103.3 4.9 1.9 1.9 0 005.2 3zM21 13.9c0-3.4-1.8-5.6-4.6-5.6a4 4 0 00-3.5 1.9V8.6H9.6V21H13v-6.4c0-1.7.8-2.6 2.1-2.6s2 .9 2 2.6V21H21v-7.1z",
};

export function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-white hover:bg-navy"
    >
      <span className="sr-only">{link.name}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
        <path d={paths[link.icon]} />
      </svg>
    </a>
  );
}
