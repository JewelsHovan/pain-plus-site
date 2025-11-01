import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SnapSectionProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

/**
 * SnapSection component for full-viewport snap scrolling
 *
 * @param fullHeight - If true, section takes full viewport height (minus header)
 * @param className - Additional CSS classes
 */
export function SnapSection({
  children,
  className,
  fullHeight = true
}: SnapSectionProps) {
  return (
    <section
      className={cn(
        'snap-section',
        fullHeight && 'snap-section-full',
        'flex items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  );
}
