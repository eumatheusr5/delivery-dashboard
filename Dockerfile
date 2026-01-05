# Multi-stage build for Laravel with FrankenPHP
FROM dunglas/frankenphp:latest-php8.3-alpine AS base

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

# Copy application files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Install Node dependencies and build assets
RUN npm install && npm run build

# Set permissions
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache
RUN chmod -R 775 /app/storage /app/bootstrap/cache

# Create storage structure
RUN mkdir -p storage/framework/{sessions,views,cache}
RUN mkdir -p storage/logs

# Optimize Laravel
RUN php artisan config:clear
RUN php artisan route:clear
RUN php artisan view:clear

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start FrankenPHP with Octane
CMD ["php", "artisan", "octane:start", "--server=frankenphp", "--host=0.0.0.0", "--port=8080"]
