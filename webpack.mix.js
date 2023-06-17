let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js')
    .js('src/firstPage.js', 'dist/js')
    .sass('src/app.scss', 'dist/css')
    .sass('src/firstPage.scss', 'dist/css');
