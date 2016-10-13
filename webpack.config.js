var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:__dirname + "/app/main.js",
    output:{
        path:__dirname + "/build",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test:/\.json$/,
                loader:"json"
            },
            {
                test:/\.css$/,
                loader:"style!css?modules!postcss"
            },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                loader: 'file'
            }
        ]
    },
    /* stylus:{
     use:[
     poststylus([ 'autoprefixer', 'rucksack-css' ])
     ]
     },*/
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: [
        require('autoprefixer')
    ],
    devServer:{
        contentBase: __dirname,
        colors:true,
        historyApiFallback:true,
        inline:true,
        port:8181
    }
}