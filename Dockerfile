# Build stage
FROM dunglas/frankenphp:latest-php8.3-alpine AS builder

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    oniguruma-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm \
    postgresql-dev

# Install PHP extensions
RUN install-php-extensions \
    pdo_pgsql \
    pgsql \
    opcache \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set Composer to allow running as root
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy composer file
COPY composer.json ./

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist --no-scripts --no-plugins

# Copy package file
COPY package.json ./

# Install Node dependencies  
RUN npm install --legacy-peer-deps --no-package-lock

# Copy application files
COPY . .

# Build frontend
RUN npm run build

# Run Laravel optimization
RUN composer dump-autoload --optimize

# Production stage
FROM dunglas/frankenphp:latest-php8.3-alpine

WORKDIR /app

# Install runtime dependencies only
RUN apk add --no-cache \
    curl \
    postgresql-client \
    && install-php-extensions \
    pdo_pgsql \
    pgsql \
    opcache \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd

# Copy application from builder
COPY --from=builder --chown=www-data:www-data /app /app

# Create required directories
RUN mkdir -p /app/storage/framework/{sessions,views,cache} \
    /app/storage/logs \
    /app/bootstrap/cache \
    && chmod -R 775 /app/storage /app/bootstrap/cache

# Expose port
EXPOSE 8080

# Set environment
ENV FRANKENPHP_CONFIG="worker ./public/index.php"
ENV SERVER_NAME=":8080"

# Start FrankenPHP directly
CMD ["sh", "-c", "php artisan migrate --force && frankenphp run --config /etc/caddy/Caddyfile"]
