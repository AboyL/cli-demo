const webpack = require('webpack');
const webpackConfig = require('./configs/webpack.config')

module.exports = () => {
  const compiler = webpack(webpackConfig);
  compiler.run(()=>{
    console.log('打包完成')
  })
}