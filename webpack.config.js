const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const config = {
  entry: { main: ["./client/main-entry.jsx"] },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.join(__dirname, `./public/generated`),
    publicPath: '/generated/',
    filename: '[name].entry.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
           MiniCssExtractPlugin.loader,
           { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
           { loader: 'sass-loader', options: { sourceMap: true } },
         ],
      },{
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'node_modules/@material')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            // Also see .babelrc
            cacheDirectory: '.babelcache',
          }
        }
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDevelopment ? "'development'" : "'production'"
      }
    }),

    extractSass
  ],
};

if (isDevelopment) {
  config.devtool = '#eval-source-map';
  config.mode = 'development';
} else {
  config.devtool = '#source-map';
  config.mode = 'production';
}

module.exports = config;
