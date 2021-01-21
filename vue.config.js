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
  assetsDir: "./static",  // 将静态资源文件放置在static文件夹中
  devServer : {
    proxy:  {
      // 已更新URL，原本的target: "http://81.70.162.122:8080",
      "/api" : {
        target: "http://193.112.125.76:8989", // 需要跨域的目标url
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项
        ws:  true,
        pathRewrite: {
          // "^/api " :  "" // 若请求的路径在目标url下但不在/api 下，则将其转换成空
        }    
      },
      "/mock": {
        target: "http://127.0.0.1:8080",
        pathRewrite: {
          "^/mock " :  "./static/mock" // 将资源放置在public/mock下
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