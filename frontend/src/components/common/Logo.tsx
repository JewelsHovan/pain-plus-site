interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { svg: 32, text: 'text-xl' },
    md: { svg: 40, text: 'text-2xl' },
    lg: { svg: 48, text: 'text-3xl' },
  };

  const dimensions = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* P+ Logo SVG - Hand-drawn style outline */}
      <svg
        width={dimensions.svg}
        height={dimensions.svg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* P Shape - Outlined block letter style */}
        <g className="text-primary">
          {/* Vertical stem of P */}
          <path
            d="M10 8 L10 40 L16 40 L16 26 L16 22 L16 8 Z"
            fill="currentColor"
          />
          {/* Top horizontal bar */}
          <path
            d="M10 8 L26 8 L26 14 L16 14 L16 8 Z"
            fill="currentColor"
          />
          {/* P bowl */}
          <path
            d="M26 8 L32 8 C35 8 37 11 37 15 C37 19 35 22 32 22 L26 22 L26 14 L30 14 C31 14 31.5 14.5 31.5 15 C31.5 15.5 31 16 30 16 L26 16 Z"
            fill="currentColor"
          />
          {/* Middle horizontal bar of P */}
          <path
            d="M16 22 L32 22 L32 26 L16 26 Z"
            fill="currentColor"
          />
        </g>

        {/* Plus Sign - Vibrant orange accent */}
        <g className="text-accent">
          {/* Vertical bar of + */}
          <path
            d="M39 15 L39 33 L43 33 L43 15 Z"
            fill="currentColor"
          />
          {/* Horizontal bar of + */}
          <path
            d="M35 22 L47 22 L47 26 L35 26 Z"
            fill="currentColor"
          />
        </g>
      </svg>

      {/* PAin+ Text */}
      {showText && (
        <span className={`${dimensions.text} font-bold text-foreground tracking-tight`}>
          P<span className="text-accent">Ai</span>n<span className="text-accent">+</span>
        </span>
      )}
    </div>
  );
}
