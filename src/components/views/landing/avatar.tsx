export const AvatarEmoji = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="origin-center animate-nod"
    >
      <defs>
        <linearGradient id="skinGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6d7b0" />
          <stop offset="100%" stopColor="#e9b98e" />
        </linearGradient>
        <linearGradient id="shirtGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
      </defs>

      {/* Head */}
      <circle cx="100" cy="85" r="45" fill="url(#skinGradient)" />

      {/* Hair */}
      <path
        d="M60 70 Q100 20 140 70 Q130 50 100 55 Q80 50 60 70"
        fill="#1a1a1a"
      />

      {/* Eyebrows */}
      <path d="M75 78 Q85 72 95 78" stroke="#111" strokeWidth="5" fill="none" />
      <path
        d="M105 78 Q115 72 125 78"
        stroke="#111"
        strokeWidth="5"
        fill="none"
      />

      {/* Eyes */}
      <g className="animate-blink transform origin-center">
        <ellipse cx="85" cy="90" rx="5" ry="3" fill="#111" />
        <ellipse cx="115" cy="90" rx="5" ry="3" fill="#111" />
      </g>

      {/* Nose */}
      <path
        d="M100 95 Q98 102 100 105"
        stroke="#b78956"
        strokeWidth="2"
        fill="none"
      />

      {/* Mouth */}
      <path
        d="M85 115 Q100 125 115 115"
        stroke="#8a4b25"
        strokeWidth="3"
        fill="none"
      />

      {/* Neck */}
      <rect x="90" y="125" width="20" height="20" fill="url(#skinGradient)" />

      {/* Shirt */}
      <path
        d="M60 140 Q100 160 140 140 Q150 200 50 200 Q60 140 60 140"
        fill="url(#shirtGradient)"
      />
    </svg>
  );
};
