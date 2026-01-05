import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/confirm-password');
    };

    return (
        <GuestLayout>
            <Head title="Confirmar Senha" />

            <div className="mb-4 text-sm text-muted-foreground">
                Esta é uma área segura do aplicativo. Por favor, confirme sua senha antes de continuar.
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1"
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="mt-2 text-sm text-destructive">{errors.password}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={processing}>
                    Confirmar
                </Button>
            </form>
        </GuestLayout>
    );
}

