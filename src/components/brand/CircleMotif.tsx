import { cn } from "@/lib/utils";
import capitolDome from "@/assets/capitol-dome.png";

/**
 * Brand motif: a photo masked into a circle over a flat blue fill, crossed by
 * two thin white arcs, with a cluster of small red squares floating upper-right.
 */
export function CircleMotif({
  src = capitolDome,
  alt = "",
  className,
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string | undefined;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full max-w-[520px] overflow-hidden pt-3", className)}>
      <div className="relative aspect-square">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-brand-blue">
          <img
            src={src}
            alt={alt}
            width={1024}
            height={1024}
            {...(priority ? {} : { loading: "lazy" as const })}
            className="absolute inset-x-0 bottom-0 w-full object-contain object-bottom"
          />
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute inset-0 size-full"
            preserveAspectRatio="none"
          >
            <path d="M-5 26 C 25 40, 60 46, 105 44" stroke="white" strokeWidth="0.7" fill="none" />
            <path d="M-5 40 C 20 55, 60 58, 105 52" stroke="white" strokeWidth="0.7" fill="none" />
          </svg>
        </div>
      </div>
      <RedSquares className="absolute -top-2 right-[-10%] w-[26%]" />
    </div>
  );
}

function RedSquares({ className }: { className?: string }) {
  const small: Array<[number, number]> = [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [1, 2],
  ];
  const big: Array<[number, number]> = [
    [3, 0],
    [2, 1],
    [3, 1],
    [4, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
  ];

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 30 46" className="w-full">
        {small.map(([x, y]) => (
          <rect key={`s-${x}-${y}`} x={12 + x * 4} y={y * 4} width="2.6" height="2.6" fill="#d83933" />
        ))}
        {big.map(([x, y]) => (
          <rect key={`b-${x}-${y}`} x={x * 4} y={20 + y * 4} width="2.6" height="2.6" fill="#d83933" />
        ))}
      </svg>
    </div>
  );
}
