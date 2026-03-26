/** Small list bullet (outline circle) */
export function IconBulletCircle({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
