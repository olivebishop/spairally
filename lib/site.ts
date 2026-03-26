/** Canonical site origin — no trailing slash */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.spairally.com"
).replace(/\/$/, "");
