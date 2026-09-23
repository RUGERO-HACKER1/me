export default function Avatar() {
  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 opacity-60 blur-md" />
      <svg
        viewBox="0 0 120 120"
        className="relative h-28 w-28 rounded-full md:h-36 md:w-36"
        aria-label="Rugero Fidele avatar"
      >
        <defs>
          <linearGradient id="avatar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="avatar-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#avatar-bg)" stroke="url(#avatar-ring)" strokeWidth="2" />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fill="#e9d5ff"
          fontFamily="Outfit, sans-serif"
          fontSize="36"
          fontWeight="700"
        >
          RF
        </text>
      </svg>
    </div>
  );
}
