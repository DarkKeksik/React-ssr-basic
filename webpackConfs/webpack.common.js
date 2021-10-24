const webpack = require('webpack');
const { join } = require('path');

const createConfig = ({ target }) => {
    const PATH_SRC = join(__dirname, "../");
    const PATH_DIST = join(PATH_SRC, "dist", target);
    const IS_SERVER = process.env.BUILD_TYPE === "server";
    const IS_CLIENT = process.env.BUILD_TYPE === "client";

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
    }
}

module.exports = {
    createConfig,
};