const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    entry: {
        popup: path.join(srcDir, './popup/popup.tsx'),
        //   options: path.join(srcDir, 'options.tsx'),
        background: path.join(srcDir, './background/background_api_backend.ts'),
        content_script: path.join(srcDir, './inject/content_script.ts'),
    },
    output: {
        // globalObject: "this",
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks: "initial",
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
    performance: {
        hints: false
    }
};
