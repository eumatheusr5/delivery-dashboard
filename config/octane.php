<?php

return [
    'server' => env('OCTANE_SERVER', 'frankenphp'),
    'https' => env('OCTANE_HTTPS', false),
    'listeners' => [],
    'client' => env('OCTANE_CLIENT', 'frankenphp'),
    'max_execution_time' => 30,
    'frankenphp' => [
        'host' => env('OCTANE_HOST', '0.0.0.0'),
        'port' => env('OCTANE_PORT', 8000),
        'max_requests' => env('OCTANE_MAX_REQUESTS', 1000),
        'watch' => explode(',', env('OCTANE_WATCH', 'app,bootstrap,config,database,routes,resources')),
    ],
    'warm' => [
        'auth',
        'products',
    ],
    'cache' => [
        'views' => true,
        'config' => true,
        'routes' => true,
    ],
];

