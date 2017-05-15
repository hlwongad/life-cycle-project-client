var path = require('path');
var webpack = require('webpack');

var dir_js = path.resolve(__dirname, 'app');
var dir_html = path.resolve(__dirname, 'www');
var dir_htmlBuild = path.resolve(dir_html, 'build');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
        app: path.resolve(dir_js, 'app.main.js')
    },
    output: {
        path: dir_htmlBuild,
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: dir_html,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
        //, new webpack.optimize.CommonsChunkPlugin("commons.js") 
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
