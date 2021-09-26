const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/main.css", "public/css", [require("tailwindcss")])
    .js("node_modules/popper.js/dist/popper.js", "public/js")
    .sourceMaps()
    .browserSync("vue-weather-app");
// .browserSync({
//     proxy: "vue-weather-app",
//     files: ["public/**/*.css", "resources/**/*"]
// });
