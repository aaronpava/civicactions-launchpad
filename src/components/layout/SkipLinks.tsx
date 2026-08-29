const cls =
  "nav-label sr-only focus:not-sr-only focus:fixed focus:top-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-navy focus:outline focus:outline-2 focus:outline-navy";

export function SkipLinks() {
  return (
    <>
      <a href="#main-content" className={`${cls} focus:left-2`}>
        Skip to content
      </a>
      <a href="#site-footer" className={`${cls} focus:left-[13rem]`}>
        Skip to footer
      </a>
    </>
  );
}
