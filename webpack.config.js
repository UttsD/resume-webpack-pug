'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/main.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
        })
    ],
    module: {
        
        loaders: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions'
        }, {
            test: /\.(png|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path].[ext]'
        }]
        
    },
    devServer: {
        stats: 'errors-only'
    }
};