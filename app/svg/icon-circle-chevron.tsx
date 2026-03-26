/** Hero “trusted by” caption icon */
export function IconCircleChevron({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8l4 4-4 4" />
    </svg>
  );
}
