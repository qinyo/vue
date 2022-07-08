const { defineConfig } = require('@vue/cli-service')
// 配置vant
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置vant
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
