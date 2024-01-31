const path = require('path');
const webpack = require('webpack');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env) => {
    return {
        entry: path.join(__dirname, '../../src/app/index.ts'),
        output: {
            path: path.join(__dirname, '../../dist'),
            filename: '[name].[contenthash].bundle.js',
            clean: true,
        },
        plugins: [
            new VueLoaderPlugin(),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                    mode: 'write-references',
                },
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../../public/index.html'),
            }),
            new webpack.DefinePlugin({
                __API_URL__: JSON.stringify(env?.API_URL || 'http://localhost:4000'),
            }),
            /*new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: false,
            }),*/
        ],
        resolve: {
            extensions: ['.ts', '.vue', '.js'],
            alias: {
                '@': path.join(__dirname, '../../src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.(js|ts)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ['@babel/plugin-transform-typescript'],
                                ['@babel/plugin-transform-runtime'],
                            ],
                        },
                    },
                },
                {
                    test: /\.(png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
    };
};
