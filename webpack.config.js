var path = require('path');



module.exports = {
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'frontend','public'),
    filename: 'bundle.js'
  },
  // when adding or removing loaders restart webpack --watch doesn't help with this
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
           // Convert images < 8kb to base64 strings
           // otherwise send to file-loader
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};