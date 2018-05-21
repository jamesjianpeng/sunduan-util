const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
  // mode: 'production',
  target: "web",
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'sunduan-util.js',
    library: 'sunduanUtil',
    libraryTarget:'window'
  },
  devtool: 'source-map'
}

module.exports = webpackConfig

/**
 *
 * 1. entry
 *   1. 打包文件的入口
 *
 * 2. output
 *    1. path, 输出的路径
 *    2. filename，输出的文件名
 *
 * 3. plugins
 *    1. uglifyjs-webpack-plugin 在 webpack 4.0 中 mode： “production” 下是默认配置
 *
 * ----------
 * 1. mode v4.8.3
 *    - webpack 的打包之后使用的环境，("production" | "development" | "none") 不同的参数会使用不同的优化方法
 * 2. devtool
 *    - 'source-map' 构建速度慢，细节最详细
 *       使用 ‘source-map’ 会在 dist 文件下每个 .js 文件会生成 .js.map 为后缀的文件
 * 3. target 指定打包之后的文件将要运行的环境
 * 4. liarary 用于向外暴露调用的方式
 */
