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
  publicPath: process.env.NODE_ENV === 'production'? '/qmojweb': '/qmojweb/',
  devServer : {
    proxy:  {
      // cjm 服务器地址：http://193.112.125.76:8989   并且需要/api
      "/api" : {
        target: "http://81.70.162.122:8888", // 需要跨域的目标url
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