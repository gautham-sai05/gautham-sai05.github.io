import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      {label && (
        <p className="section-label" aria-hidden="true">
          {label}
        </p>
      )}
      <h2 className="text-display-md text-text text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-text-muted text-pretty max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
