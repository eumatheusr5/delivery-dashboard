import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function ResetPassword({ token, email }: { token: string; email: string }) {
    const { data, setData, post, processing, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/reset-password');
    };

    return (
        <GuestLayout>
            <Head title="Redefinir Senha" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
                </div>

                <div>
                    <Label htmlFor="password">Nova Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1"
                        autoComplete="new-password"
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="mt-2 text-sm text-destructive">{errors.password}</p>}
                </div>

                <div>
                    <Label htmlFor="password_confirmation">Confirmar Senha</Label>
                    <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    {errors.password_confirmation && (
                        <p className="mt-2 text-sm text-destructive">{errors.password_confirmation}</p>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={processing}>
                    Redefinir Senha
                </Button>
            </form>
        </GuestLayout>
    );
}

