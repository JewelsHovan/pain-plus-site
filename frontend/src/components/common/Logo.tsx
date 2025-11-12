interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export function Logo({
  className = '',
  size = 'md',
  variant = 'default',
}: LogoProps) {
  const sizeMap = {
    sm: { img: 32, text: 'text-xl' },
    md: { img: 40, text: 'text-2xl' },
    lg: { img: 48, text: 'text-3xl' },
  };

  const dimensions = sizeMap[size];
  const logoSrc = variant === 'light' ? '/white_blue_logo.png' : '/logo_blue_orange.png';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* P+ Logo Image */}
      <img
        src={logoSrc}
        alt="Pain+ Logo"
        width={dimensions.img}
        height={dimensions.img}
        className="flex-shrink-0"
      />
    </div>
  );
}
