import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <GuestLayout>
            <Head title="Esqueceu a Senha" />

            <div className="mb-4 text-sm text-muted-foreground">
                Esqueceu sua senha? Sem problemas. Informe seu endereço de email e enviaremos um link para
                redefinir sua senha.
            </div>

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1"
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={processing}>
                    Enviar Link de Redefinição
                </Button>
            </form>
        </GuestLayout>
    );
}

