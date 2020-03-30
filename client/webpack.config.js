const path = require('path');

module.exports = {
    name: 'Boiler-Plate',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: [
            './src/client'
        ],
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: [
                   ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 5% in KR'],
                    },
                    debug: true,
                   }],
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "true" }]
                ],
            },
        },
        {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: "less-loader",
                options: {
                  javascriptEnabled: true, 
                },
              },
            ],
        }    
    ],
    },

    plugins: [],
    devServer: {
        port: 8080,
        // contentBase: 'src/',
        historyApiFallback: true,
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true
          }
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
};