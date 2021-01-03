module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/qmojweb': '/qmojweb/',
  devServer : {
    proxy:  {
      "/api" : {
        target: "http://81.70.162.122:8080", // 需要跨域的目标url
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项
        ws:  true,
        pathRewrite: {
          "^/api" :  ""
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