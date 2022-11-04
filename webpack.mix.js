const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')

mix.postCss('resources/css/site.css', 'public/css', [
  require('postcss-import')(),
  require('postcss-extend')(),
  require('postcss-sassy-mixins')(),
  require('postcss-for')(),
  require('postcss-each')(),
  require('postcss-conditionals')(),
  require('postcss-advanced-variables')(),
  require('postcss-nested')(),
  require('autoprefixer')(),
  require('postcss-preset-env')({ stage: 0 })
]);

if (mix.inProduction()) {
   mix.version();
   mix.purgeCss({
    enabled: true,
    whitelistPatternsChildren: [/^content$/]
  });
}
