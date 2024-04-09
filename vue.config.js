const { defineConfig } = require("@vue/cli-service")
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 项目的根目录访问路径
  publicPath: "/",
  // 打包输出文件路径
  outputDir: "dist",
  // 静态资源目录（js,css,img,fonts）
  assetsDir: "assets",
  // 用来配置跨域，启动项目端口号
  devServer: {
    // 自动打开浏览器
    // open: true,
    // 端口号
    port: 8888,
    // 跨域代理
    proxy: {
      "/api": {
        // 目标地址
        target: "http://www.baidu.com",
        // 是否改变请求地址的源
        changeOrigin: true,
        // 是否改变请求地址的源
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  // 路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@component": resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
})
