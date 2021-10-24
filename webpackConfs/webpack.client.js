const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common').createConfig();

module.exports = {
    ...config,

    module: {
        ...config.module,

        rules: [
            ...config.module.rules,

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
};