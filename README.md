# Delivery Dashboard

Sistema de gestão delivery desenvolvido com Laravel 11 + Inertia.js + React 19 + TypeScript.

## Stack Tecnológica

- **Backend:** Laravel 11 + Octane + FrankenPHP
- **Frontend:** React 19 + TypeScript + Tailwind CSS
- **Bridge:** Inertia.js
- **Database:** PostgreSQL 16
- **Cache/Sessions:** Redis 7
- **Deploy:** Digital Ocean App Platform

## Requisitos Locais

- Docker & Docker Compose
- Composer (para gerenciar dependências PHP)
- Bun ou NPM (para gerenciar dependências JavaScript)

## Instalação Local com Docker

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd delivery2
```

2. Copie o arquivo de ambiente:
```bash
cp .env.example .env
```

3. Inicie os containers:
```bash
docker-compose up -d
```

4. Instale as dependências PHP:
```bash
docker-compose exec frankenphp composer install
```

5. Gere a chave da aplicação:
```bash
docker-compose exec frankenphp php artisan key:generate
```

6. Execute as migrations:
```bash
docker-compose exec frankenphp php artisan migrate
```

7. Instale as dependências JavaScript e compile os assets:
```bash
bun install
bun run dev
```

8. Acesse a aplicação em: `http://localhost:8000`

## Comandos Úteis

### Desenvolvimento
```bash
# Rodar o servidor de desenvolvimento (Vite)
bun run dev

# Build para produção
bun run build

# Rodar migrations
docker-compose exec frankenphp php artisan migrate

# Criar um novo usuário (via tinker)
docker-compose exec frankenphp php artisan tinker
```

### Octane (FrankenPHP)
```bash
# Iniciar o servidor Octane
php artisan octane:start --server=frankenphp

# Reiniciar o servidor
php artisan octane:reload
```

## Deploy na Digital Ocean

O projeto está configurado para deploy automático via `app.yaml`.

1. Conecte seu repositório GitHub à Digital Ocean App Platform
2. Configure as variáveis de ambiente no painel da Digital Ocean
3. O deploy será automático a cada push na branch `main`

## Estrutura do Projeto

```
delivery2/
├── app/                    # Código PHP da aplicação
│   ├── Http/
│   │   ├── Controllers/   # Controllers
│   │   └── Middleware/    # Middlewares
│   └── Models/            # Models Eloquent
├── config/                # Arquivos de configuração
├── database/
│   └── migrations/        # Migrations do banco
├── public/                # Assets públicos
├── resources/
│   ├── css/              # Estilos CSS
│   ├── js/               # Código React/TypeScript
│   │   ├── Components/   # Componentes reutilizáveis
│   │   ├── Layouts/      # Layouts da aplicação
│   │   └── Pages/        # Páginas Inertia
│   └── views/            # Views Blade
├── routes/               # Rotas da aplicação
├── docker-compose.yml    # Configuração Docker local
├── Dockerfile            # Build Docker
└── app.yaml             # Configuração Digital Ocean
```

## Funcionalidades Implementadas

- ✅ Sistema de autenticação completo (Login, Registro, Recuperação de Senha)
- ✅ Dashboard com sidebar colapsável
- ✅ Página de Produtos (estrutura base)
- ✅ Layout responsivo e profissional
- ✅ Dark mode support (via Tailwind)

## Próximos Passos

- [ ] CRUD completo de Produtos
- [ ] Upload de imagens para DO Spaces
- [ ] Sistema de permissões (Roles & Policies)
- [ ] Dashboard com estatísticas reais
- [ ] Notificações real-time com Laravel Reverb

## Licença

MIT

