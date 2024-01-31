const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge(config(), {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify(true),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /swiper\.esm\.js/,
                sideEffects: false,
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
    },
});
