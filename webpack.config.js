const path = require('path');

module.exports = {
    mode: 'development', // Cambia a 'production' para el despliegue
    entry: {
        main: './addons/web/static/src/js/main.js', // Archivo de entrada principal
        jquery: './addons/web/static/lib/jquery/jquery.min.js', // Archivo de jQuery
        bootstrap: './addons/web/static/lib/bootstrap/bootstrap.min.js', // Archivo de Bootstrap
    },
    output: {
        path: path.resolve(__dirname, './addons/web/static/lib'), // Carpeta de salida
        filename: '[name].bundle.js', // Nombre de los archivos generados
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Manejo de archivos SCSS
                use: [
                    'style-loader', // Inyecta estilos en el DOM
                    'css-loader',   // Convierte CSS en módulos
                    'sass-loader',  // Compila SCSS a CSS
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif)$/, // Manejo de recursos
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery', // Alias para jQuery
        },
    },
};
