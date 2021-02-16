const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  name: 'Boiler-Plate',
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./src/client'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions', 'ie >= 11'],
                },
                debug: true,
                useBuiltIns: 'usage',
                corejs: 3,
                shippedProposals: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
            [
              'import',
              { libraryName: 'antd', libraryDirectory: 'es', style: 'true' },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
};
