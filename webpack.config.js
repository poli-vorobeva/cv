// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";
const CopyPlugin = require("copy-webpack-plugin");
const config = {
  entry: "./src/index.ts",
  devtool:'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/[name][ext]'
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./public/assets" ,noErrorOnMissing: true},

      ],
    }),
    new HtmlWebpackPlugin({
                            template: './index.html'
                          })
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      }, {
        test: /\.css$/i,
        use: [stylesHandler, {
          loader: 'css-loader',
          options: {
            modules: {
              exportLocalsConvention: "camelCase",
            },
          },
        }],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset',
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"],
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
