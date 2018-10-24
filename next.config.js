const trash = require('trash')

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            },
          },
          {
            loader: 'style-loader',
          },
          'postcss-loader',
        ]
      }
    )

    return config
  }
}
