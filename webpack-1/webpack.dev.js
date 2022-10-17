const webpack = require('webpack-1')

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dev')
        })
    ],
}