const {
    join,
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    // 出口
    output: {
        assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
        filename: "scripts/[name].[contenthash:5].bundle.js",
        publicPath: "/assets"
    },
    // 压缩
    optimization: {
        minimize: true,
        runtimeChunk:{
            name: "runtime"
        },
        // 提供公共的代码
        // https://segmentfault.com/a/1190000039730567
        splitChunks: {
            chunks: "async", // initial all  函数
            minChunks: 1, // 最小被引用次数，才会被处理
            maxAsyncRequests: 5, // 最大默认请求数
            maxInitialRequests: 3, // 
            name: false,
            cacheGroups: {
                // 公共代码提取
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    name: "commons"
                }
            },
            minSize:{
                javascript: 100000,
                style: 100000,
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "京程一灯VIP官网",
            filename: "index.html",
            template: resolve(__dirname, "../src/index-prod.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                // 移除属性的引号
                removeAttributeQuotes: true,
            }
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                preset: [
                    "default",
                    {
                        // 移除注释
                        discardComments: {
                            removeAll: true
                        }
                    }
                ]
            }
        })
    ]
}