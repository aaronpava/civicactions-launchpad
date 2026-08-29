const tints = ["#e6e9ee", "#e9ecef", "#e2e8ea", "#eceaea", "#e4e9e8", "#eaeaef"];

/** Neutral generated placeholder portrait — a flat silhouette, not a photo of a real person. */
export function TeamAvatar({ name, className }: { name: string; className?: string }) {
  const index = name.charCodeAt(0) % tints.length;
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className={className}
    >
      <rect width="100" height="100" fill={tints[index]} />
      <circle cx="50" cy="38" r="16" fill="#c4c4c4" />
      <path d="M14 100c0-20 16-32 36-32s36 12 36 32z" fill="#c4c4c4" />
    </svg>
  );
}
