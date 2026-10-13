/**
 * CLOSER Conference 2026 — Next.js configuration.
 *
 * Static export tuned for GitHub Pages + the custom domain.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * BASE PATH
 *
 * The production site is served from the custom domain ROOT:
 *     https://conferintacloser.ro/
 * so the base path is EMPTY ("") by default and every asset lives at "/...".
 *
 * The `public/CNAME` file tells GitHub Pages to serve the site at that domain
 * (at the root), which is why no "/closer-conference" prefix is needed.
 *
 * Optional: to test the raw GitHub Pages PROJECT url before the domain is live
 *     https://stanciu4darius.github.io/closer-conference
 * build with the prefix via the env var:
 *     set NEXT_PUBLIC_BASE_PATH=/closer-conference   (Windows CMD)
 *     NEXT_PUBLIC_BASE_PATH=/closer-conference npm run build   (bash)
 *
 * Images referenced outside <Image>/<Link>, and <Image> itself while
 * `images.unoptimized` is on, are prefixed through lib/site.ts → asset(),
 * which reads NEXT_PUBLIC_BASE_PATH, so everything follows this one value.
 * ──────────────────────────────────────────────────────────────────────────
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Hide the floating dev tools indicator during `next dev`.
  devIndicators: false,
};

export default nextConfig;
