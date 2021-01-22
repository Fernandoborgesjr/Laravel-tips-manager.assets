const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix 
 //SITE
    .styles(['resources/views/site/css/styles.css',],
            'public/site/css/style.css')
    .scripts(['resources/views/site/js/index.js',],
            'public/site/js/index.js')
    
//ADMIN
    .styles(['resources/views/admin/css/styles.css',],
            'public/admin/css/style.css')
    .scripts(['resources/views/admin/js/index.js',],
            'public/admin/js/index.js')
    .version();