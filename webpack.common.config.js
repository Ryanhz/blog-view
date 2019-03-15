const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
  },

  devtool: "scource-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: "awesome-typescript-loader" },
      {
        test: /\.css$/, use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          "postcss-loader"

        ]
      },
      { enforce: "pre", test: /\.js$/, use: "source-map-loader" },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body",
      showErrors: true,
      hash: true,
      favicon: "./favicon.ico"
    }),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};