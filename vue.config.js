const DEV = "https://hybo-miniprogram-server-dev.hybo.cn";
const TEST = "https://hybo-miniprogram-server-test.hybo.cn";
const PROD = "https://hybo-miniprogram-server.hybo.cn";
let api;
if (process.env.NODE_ENV == "development") {
    api = DEV
} else if (process.env.NODE_ENV == "production") {
    api = PROD
}
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
    lintOnSave: false,
    publicPath: './',            // 公共,基本路径
    // 输出文件目录，不同的环境打不同包名
    outputDir: 'build',
    assetsDir: 'assets',        // 默认会在目录同时生成三个静态目录：js,css,img
    filenameHashing: true,     // 生成的静态资源名, 默认加了hash, 命名.后面的为hash：chunk-2d0aecf8.71e621e9
    productionSourceMap: true,  // 生产环境下css 分离文件, sourceMap 文件
    devServer: {
        port: 8001,
        host: "0.0.0.0",   // 0.0.0.0
        open: true,
        hotOnly: false,
        proxy: {
            "/api": {
                target: api,
                changeOrigin: true
            },
            "/web": {
                target: api,
                changeOrigin: true
            }
        },
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PROD,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    }
}