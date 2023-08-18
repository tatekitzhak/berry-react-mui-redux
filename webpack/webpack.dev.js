if(typeof process.env.NODE_ENV == "undefined")
{
  process.env.NODE_ENV = "dev";
}

let server_hosts = {
    "dev": "localhost", // 0.0.0.0 
    "production": "http://askmediadev.com"
};

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
    host: process.env.NODE_ENV == "development" ? server_hosts.dev: server_hosts.production,
    port: process.env.PORT,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
}
