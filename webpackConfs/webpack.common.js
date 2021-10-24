const webpack = require('webpack');
const { join } = require('path');

const createConfig = ({ target }) => {
    const PATH_SRC = join(__dirname, "../");
    const PATH_DIST = join(PATH_SRC, "dist", target);
    const IS_SERVER = target === 'server';
    const IS_CLIENT = target === 'client';

    return {
        name: target,
        entry: join(PATH_SRC, target),
        mode: "development",
        output: {
            path: PATH_DIST,
            filename: '[name].js'
        },
        resolve: {
            modules: [
                "node_modules",
                "src"
            ],
            extensions: [".tsx", ".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                IS_CLIENT: JSON.stringify(IS_CLIENT),
                IS_SERVER: JSON.stringify(IS_SERVER),
                'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined')
            }),
        ],
    }
}

module.exports = {
    createConfig,
};