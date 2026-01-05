#!/bin/sh
set -e

echo "Running migrations..."
php artisan migrate --force --no-interaction

echo "Starting FrankenPHP with Octane..."
php artisan octane:start --server=frankenphp --host=0.0.0.0 --port=8080

