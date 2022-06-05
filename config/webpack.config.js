const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const devConfig = require("./webpack.config.dev.js");
const prodConfig = require("./webpack.config.prod");

module.exports = (env) => {
    if (env.development) {
        return merge(commonConfig, devConfig);

    }
    if (env.production) {
        return merge(commonConfig, prodConfig);
    }
    return new Error("无配置");
}