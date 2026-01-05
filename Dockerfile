# Multi-stage build for Laravel with FrankenPHP
FROM dunglas/frankenphp:latest-php8.3-alpine

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

# Copy application files
COPY . .

# Make start script executable
RUN chmod +x start.php

# Create required directories with proper permissions
RUN mkdir -p /app/bootstrap/cache \
    /app/storage/framework/sessions \
    /app/storage/framework/views \
    /app/storage/framework/cache \
    /app/storage/logs \
    && chmod -R 777 /app/bootstrap/cache /app/storage

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Install Node dependencies and build assets
RUN npm install --legacy-peer-deps && npm run build

# Set permissions
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache \
    && chmod -R 775 /app/storage /app/bootstrap/cache

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=120s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start FrankenPHP with Octane
CMD ["php", "start.php"]
