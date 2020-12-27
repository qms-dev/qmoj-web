const path = require('path');

module.exports = {
  /**
     * why do like this can see https://stackoverflow.com/questions/62196921/vue-js-configure-a-custom-alias-using-webpack
     */
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
  },
  devServer : {
    proxy:  {
      "/api" : {
        target: "http://81.70.162.122:8080", // 需要跨域的目标url
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项
        ws:  true,
        pathRewrite: {
          "^/api " :  "" // 若请求的路径在目标url下但不在/api 下，则将其转换成空
        }    
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}