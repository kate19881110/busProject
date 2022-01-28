const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 把 `/api` 從字串移除
        }
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
      .use('yaml')
      .loader('yaml-loader')
      .end();
    config.module
      .rule('yaml')
      .test(/\.ya?ml$/)
      .include.add(resolve('src/i18n/langs'))
      .end()
      .type('json')
      .use('yaml-loader')
      .loader('yaml-loader')
      .end();
  },

  configureWebpack: {
    plugins: [
      // 按需載入 element+ (https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
      require('unplugin-vue-components/webpack')({ resolvers: [ElementPlusResolver()] }),
      require('unplugin-auto-import/webpack')({ resolvers: [ElementPlusResolver()] })
    ]
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: ['./src/styles/variables.sass']
    }
  }
};
