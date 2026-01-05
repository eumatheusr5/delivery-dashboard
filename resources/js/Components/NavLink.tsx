import { Link, InertiaLinkProps } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={cn(
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none',
                active
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300',
                className
            )}
        >
            {children}
        </Link>
    );
}

