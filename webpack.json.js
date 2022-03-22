/**
 * Webpack config file
 */

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    devtool: "cheap-module-source-map",
    mode: "development",
    module: {
        rules: [
            // JavaScript and JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // CSS files
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "./public", "index.html"),
        }),
    ],
    resolve: {
        extensions: [".js"],
    },
    target: "web",
};
