const {join} = require('path')

module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    path: join(__dirname, 'dist'),
    filename:  'index.js',
    library: {
      type: 'umd',
      name: 'index'
    },
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
    ]
  }
}