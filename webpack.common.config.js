const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const tsImportPlugFactory = require('ts-import-plugin')
//const AntdScssThemePlugin = require('antd-scss-theme-plugin');

const lessRules = {
  test: /\.less$/, use: [
    {
      loader: "style-loader",
    }, {
      loader: "css-loader",
    },
    'less-loader'
    //AntdScssThemePlugin.themify({ loader: 'less-loader', options: { javascriptEnabled: true, } }),
  ]
}

const scssRules = {
  test: /\.scss$/,
  loader: ['style-loader', {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    }
  },
    "postcss-loader",
    "sass-loader",
  ],
}

const cssRules = {
  test: /\.css$/, use: [
    "style-loader",
    {
      loader: 'css-loader',
      options: {
        modules: false,
        importLoaders: 1,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      }
    },
    "postcss-loader"
  ]
}

const styleRules = [cssRules, scssRules, lessRules]

const tsRules = {
  test: /\.ts(x?)$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        getCustomTransformers: () => ({
          before: [
            tsImportPlugFactory({
              libraryName: 'antd',
              // libraryDirectory: 'es',
              //填写true的话使用组件的less文件
              //填写css的话使用css文件，但同时不能定制主题
              style: true
            })
          ]
        })
      }
    }
  ]
}

const svgRule = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: ['@svgr/webpack', 'url-loader'],
}

const imgRule = {
  test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}

const flieRules = [svgRule, imgRule]

// 获取自己定义的要覆盖antd默认样式的文件
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
    // publicPath: '/dist/',
  },

  devtool: "scource-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@Style": path.resolve("src/styles"),
      "@Assets": path.resolve("src/assets"),
      "@Redux": path.resolve("src/redux"),
      "@Components": path.resolve("src/components"),
      "@Routers": path.resolve("src/routers"),
    }
  },

  module: {
    rules: [
      ...styleRules,
      tsRules,
      { enforce: "pre", test: /\.js$/, use: "source-map-loader" },
      ...flieRules
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
    // new AntdScssThemePlugin(path.resolve(__dirname, "src/styles/theme.scss")),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};