import { cn } from '~/lib/utils';
import { type ReactNode } from 'react';

interface TypographyProps {
  suppressHydrationWarning?: boolean;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-5xl font-light tracking-tight lg:text-6xl',
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn('scroll-m-20 text-4xl font-bold tracking-tight', className)}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn('scroll-m-20 text-xl font-bold tracking-tight', className)}
    >
      {children}
    </h3>
  );
}

export const P = ({
  children,
  className,
  title,
  ...props
}: TypographyProps) => (
  <p title={title} className={cn('leading-7', className)} {...props}>
    {children}
  </p>
);

export function Title({ children, className }: TypographyProps) {
  return (
    <div className={cn('tracking-wide font-medium', className)}>{children}</div>
  );
}

export function Code({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        'relative rounded-sm bg-border px-1 py-0.5 font-mono text-sm',
        className,
      )}
    >
      {children}
    </code>
  );
}

export function Large({ children, className }: TypographyProps) {
  return <div className={cn('text-lg font-medium', className)}>{children}</div>;
}

export function Small({
  children,
  className,
  title,
  ...props
}: TypographyProps) {
  return (
    <small title={title} className={cn('text-sm', className)} {...props}>
      {children}
    </small>
  );
}

export function Tiny({ children, className }: TypographyProps) {
  return <small className={cn('text-xs', className)}>{children}</small>;
}

export function Muted({
  children,
  className,
  suppressHydrationWarning = false,
}: TypographyProps) {
  return (
    <p
      className={cn('text-muted-foreground leading-6', className)}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </p>
  );
}
