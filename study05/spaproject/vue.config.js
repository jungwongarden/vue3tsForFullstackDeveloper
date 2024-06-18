module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  }
}
