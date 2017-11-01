const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug.js');
const devserver = require('./webpack/devserver.js');

const extractCSS = require('./webpack/css.extract.js');
const files = require('./webpack/files.js');
 
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'docs')
};

const common = merge([{
    entry: {
        'index': PATHS.source + '/index.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: PATHS.source + '/index.pug',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]
},
pug(),
extractCSS(),
files()
]);
    module.exports =  function(env){
        if (env === 'production') {
            return merge([
                common
                
            ]);
            
        }
        if (env === 'development') {
            return merge([
                common,
                devserver()
                
            ])   
    }
};