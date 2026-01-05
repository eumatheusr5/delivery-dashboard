import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Package } from 'lucide-react';

export default function ProductsIndex({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Produtos" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
                        <p className="text-muted-foreground">
                            Gerencie seu catálogo de produtos
                        </p>
                    </div>
                </div>

                {/* Empty State */}
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed bg-card p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                        <Package className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">Nenhum produto cadastrado</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-sm">
                        Você ainda não tem produtos cadastrados. Comece adicionando seu primeiro produto.
                    </p>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        Adicionar Produto
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

