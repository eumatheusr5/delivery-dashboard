import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Bem-vindo ao sistema de gestão Delivery
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card de Boas-vindas */}
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Bem-vindo, {auth.user.name}!</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Este é o seu painel de controle. Use o menu lateral para navegar.
                        </p>
                    </div>

                    {/* Placeholder para estatísticas futuras */}
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Produtos</h3>
                        <p className="mt-2 text-3xl font-bold">0</p>
                        <p className="text-sm text-muted-foreground">Total de produtos</p>
                    </div>

                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Vendas</h3>
                        <p className="mt-2 text-3xl font-bold">R$ 0,00</p>
                        <p className="text-sm text-muted-foreground">Total de vendas</p>
                    </div>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Início Rápido</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            <span>Adicione seus primeiros produtos no menu "Produtos"</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-muted"></span>
                            <span>Configure as categorias de produtos</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-muted"></span>
                            <span>Gerencie pedidos e entregas</span>
                        </li>
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

