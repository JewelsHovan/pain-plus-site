interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { img: 32, text: 'text-xl' },
    md: { img: 40, text: 'text-2xl' },
    lg: { img: 48, text: 'text-3xl' },
  };

  const dimensions = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* P+ Logo Image */}
      <img
        src="/logo_blue_orange.png"
        alt="PAin+ Logo"
        width={dimensions.img}
        height={dimensions.img}
        className="flex-shrink-0"
      />

      {/* PAin+ Text */}
      {showText && (
        <span className={`${dimensions.text} font-bold text-foreground tracking-tight`}>
          P<span className="text-accent">Ai</span>n<span className="text-accent">+</span>
        </span>
      )}
    </div>
  );
}
