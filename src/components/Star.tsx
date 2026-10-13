type Props = {
  className?: string;
};

/**
 * The 4-point sparkle star from the CLOSER identity.
 * Pure SVG so it inherits currentColor and scales crisply.
 */
export function Star({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
