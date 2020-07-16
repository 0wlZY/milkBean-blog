const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  filenameHashing: true,
  lintOnSave: true,
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"))
      .set("api", resolve("src/axios/api"))
      .set("libs", resolve("src/libs"));
  },

  devServer: {
    port: 8080
  },

  css: {
    sourceMap: process.env.NODE_ENV !== "production",
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
    // requireModuleExtension: true
  }
  // 第三方插件的选项
  // pluginOptions: {
  //   env: {
  //     TEST: 'vue.config.js-->pluginOptions.env:TEST Global Parameters'
  //   },
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [path.resolve(__dirname, './src/assets/style/settings.less')]
  //   }
  // }
};
