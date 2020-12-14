const port = process.env.port || process.env.npm_config_port || 8888 // dev port

module.exports = {
  // assetsDir: 'static',
  publicPath: './',
  css: {
    extract: false
  },
  // chainWebpack: {
  //   mode: "development",
  // },
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server')
  },
}