const webpack = require('webpack-1');

module.exports = {
    // Set the mode to development or production
    mode: 'development',

    // Control how source maps are generated
    devtool: 'inline-source-map',

    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 5050,
    }
}