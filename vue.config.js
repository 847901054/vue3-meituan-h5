const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const ComponentsPlugin2 = require('unplugin-auto-import/webpack');

module.exports = {
  lintOnSave: false, // 取消eslint语法监听
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 37.5,
            selectorBlackList: ["vant"], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      }),
      ComponentsPlugin2({
        imports: ['vue', 'vue-router'], // 批量引入 页面内无需引入即可使用
        eslintrc: {enabled: true}
      })
    ]
  }
}
