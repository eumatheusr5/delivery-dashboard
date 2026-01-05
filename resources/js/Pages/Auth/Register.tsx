import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <GuestLayout>
            <Head title="Registrar" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1"
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
                </div>

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
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1"
                        autoComplete="new-password"
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
                    Registrar
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                        Faça login
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}

