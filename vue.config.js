module.exports = {
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