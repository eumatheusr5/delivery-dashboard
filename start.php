#!/usr/bin/env php
<?php

use Illuminate\Support\Facades\Artisan;

define('LARAVEL_START', microtime(true));

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

// Run migrations
echo "Running migrations...\n";
Artisan::call('migrate', ['--force' => true]);

// Start Octane
echo "Starting Octane with FrankenPHP...\n";
passthru('php artisan octane:start --server=frankenphp --host=0.0.0.0 --port=8080');

