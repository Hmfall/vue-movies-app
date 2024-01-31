const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge(config(), {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            DEV: JSON.stringify(false),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'source-map',
});
