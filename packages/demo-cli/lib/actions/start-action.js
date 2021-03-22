const webpack = require('webpack');
const open = require('open');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./configs/webpack.config')
const port = 8333
const HOST = process.env.HOST || '0.0.0.0';

module.exports = () => {
  const compiler = webpack(webpackConfig);

  const devServer = new WebpackDevServer(compiler, {
    quiet: true,// 不要webpack编译的时候打印的日志 https://webpack.docschina.org/configuration/stats/
  });

  devServer.listen(port, HOST, () => {
    const url = `http://localhost:${port}`
    console.log('服务启动于', url)
    open(url)
  })
}