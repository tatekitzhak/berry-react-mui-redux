const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.jsx'),
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            {
                // should use babel-loader for all ts js tsx and jsx files
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                // should use style-loader and css-loader for all css files
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // v5 supports image loaders out of box
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
        output: {
            path: path.resolve(__dirname, '..', './build'),
            filename: '[name].[chunkhash].js',
        },
        devServer: {
            inline: false,
            contentBase: "./build",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "./src/index.html")
            }),
            new CopyWebpack({
                patterns: [{ from: 'sourcefolder', to: 'destinationfolder' }],
            }),
        ]
    }
}