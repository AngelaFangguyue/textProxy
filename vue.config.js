const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
         target: 'https://movie.douban.com/j',  //http://api.douban.com/v2',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}