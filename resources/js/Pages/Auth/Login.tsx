import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <GuestLayout>
            <Head title="Login" />

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
                        autoComplete="username"
                        autoFocus
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
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="mt-2 text-sm text-destructive">{errors.password}</p>}
                </div>

                <div className="flex items-center">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="remember" className="ml-2">
                        Lembrar-me
                    </Label>
                </div>

                <div className="flex items-center justify-between">
                    {canResetPassword && (
                        <Link
                            href="/forgot-password"
                            className="text-sm text-muted-foreground underline hover:text-foreground"
                        >
                            Esqueceu sua senha?
                        </Link>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={processing}>
                    Entrar
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    Não tem uma conta?{' '}
                    <Link href="/register" className="text-primary hover:underline">
                        Registre-se
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}

