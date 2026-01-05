import { PropsWithChildren, useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { User } from 'lucide-react';

export default function AuthenticatedLayout({
    user,
    header,
    children,
}: PropsWithChildren<{ user: any; header?: React.ReactNode }>) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <Sidebar />

            {/* Main Content */}
            <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
                {/* Header */}
                <header className="sticky top-0 z-30 border-b bg-card">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            {header}
                        </div>

                        {/* User Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <User className="h-4 w-4" />
                                </div>
                                <span className="font-medium">{user.name}</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <div className="px-2 py-1.5 text-sm">
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/profile">Perfil</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/logout" method="post" as="button" className="w-full text-left">
                                        Sair
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}

