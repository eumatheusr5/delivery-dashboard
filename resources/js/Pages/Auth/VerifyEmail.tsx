import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button } from '@/Components/ui/button';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

    return (
        <GuestLayout>
            <Head title="Verificação de Email" />

            <div className="mb-4 text-sm text-muted-foreground">
                Obrigado por se registrar! Antes de começar, você poderia verificar seu endereço de email
                clicando no link que acabamos de enviar? Se você não recebeu o email, teremos prazer em
                enviar outro.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    Um novo link de verificação foi enviado para o endereço de email fornecido durante o
                    registro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button type="submit" disabled={processing}>
                        Reenviar Email de Verificação
                    </Button>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="text-sm text-muted-foreground underline hover:text-foreground"
                    >
                        Sair
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

