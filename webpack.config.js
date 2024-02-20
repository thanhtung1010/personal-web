const path = require('path');

const config = {
  entry : {
    main: './src/main.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname, 'disk'),
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@environments': path.resolve(__dirname, 'src/environments'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    extensions: ['.ts', '.js'],
  },
}

module.exports = config;
