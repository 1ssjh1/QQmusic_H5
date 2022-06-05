const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        main: {
            import: ["./src/js/index.js", "./src/js/flexible.js"],
            filename: "main/[name].js"
        }
    },
    mode: "production",

    output: {


        filename: "script/[name].[contenthash].js",

    },




    optimization: {
        // 压缩css 文件
        minimizer: [
            new CssMinimizerPlugin()
        ],

    },
    performance: {
        hints: false
    }
}