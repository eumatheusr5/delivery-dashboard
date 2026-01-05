import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const currentPath = window.location.pathname;

    const menuItems = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
            active: currentPath === '/dashboard',
        },
        {
            name: 'Produtos',
            href: '/produtos',
            icon: Package,
            active: currentPath === '/produtos',
        },
    ];

    return (
        <aside
            className={cn(
                'fixed left-0 top-0 z-40 h-screen transition-all duration-300 border-r bg-card',
                collapsed ? 'w-16' : 'w-64',
                className
            )}
        >
            <div className="flex h-full flex-col">
                {/* Logo */}
                <div className="flex h-16 items-center justify-between border-b px-4">
                    {!collapsed && (
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <ApplicationLogo className="h-8 w-8 text-primary" />
                            <span className="text-lg font-semibold">Delivery</span>
                        </Link>
                    )}
                    {collapsed && (
                        <Link href="/dashboard" className="flex items-center justify-center w-full">
                            <ApplicationLogo className="h-8 w-8 text-primary" />
                        </Link>
                    )}
                </div>

                {/* Menu Items */}
                <nav className="flex-1 space-y-1 p-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent',
                                    item.active
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                        : 'text-muted-foreground hover:text-foreground',
                                    collapsed && 'justify-center'
                                )}
                                title={collapsed ? item.name : undefined}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                {!collapsed && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Toggle Button */}
                <div className="border-t p-2">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className={cn(
                            'flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent text-muted-foreground hover:text-foreground',
                            collapsed && 'justify-center'
                        )}
                        title={collapsed ? 'Expandir' : 'Recolher'}
                    >
                        {collapsed ? (
                            <ChevronRight className="h-5 w-5" />
                        ) : (
                            <>
                                <ChevronLeft className="h-5 w-5" />
                                <span>Recolher</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </aside>
    );
}

