const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.jsx'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: path.join(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: 'babel_cache',
                    presets: ['react', 'es2015', 'stage-0']
                }
            }],
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            sourcemap: true,
            beautify: false,
            dead_code: true
        })
    ]
};