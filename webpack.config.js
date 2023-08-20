const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: process.env.BUILD_ANALYZE ? 'source-map' : false,
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        open: 'Chrome',
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser.js'
        }),
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')]
            },
            {
                test: /\.md$/,
                use: [require.resolve('html-loader'), require.resolve('markdown-loader')]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.avif/],
                use: [
                    {
                        loader: require.resolve('url-loader'),
                        options: {
                            esModule: false,
                            limit: 10000,
                            name: 'static/[name].[contenthash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: [/\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/, /\.mp4$/],
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            esModule: false,
                            name: 'static/[name].[contenthash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}