import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverted';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-700 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(227,6,19,0.4)]',
  secondary:
    'bg-white text-brand-ink border border-gray-200 hover:border-brand-ink hover:-translate-y-0.5',
  ghost:
    'text-brand-ink hover:text-brand-red',
  inverted:
    'bg-white text-brand-red hover:bg-gray-100',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
