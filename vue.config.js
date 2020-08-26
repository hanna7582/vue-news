module.exports = {
  // eslint 비활성화 false
  publicPath: '/',
  lintOnSave:true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.hnpwa.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}