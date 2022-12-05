const path = require("path");

module.exports = {
    output: {
        path: path.join(__dirname, "/public"),
        filename: "app.bundle.js",
    },
    devServer: {
        static: path.resolve(__dirname, "/public"),
        port: 8089,

        historyApiFallback: true,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: "url-loader?limit=8192",
                },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
