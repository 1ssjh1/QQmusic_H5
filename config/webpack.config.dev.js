module.exports = {
    mode: "development",

    output: {
        filename: "scripts/[name].js",

    },
    devtool: "cheap-module-source-map",
    devServer: {
        hot: true,
        static: "../dist"
    },




}