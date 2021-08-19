const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин HtmlWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключаем плагин CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключаем плагин mini-css-extract-plugin

module.exports = {
  entry: {
    main: './src/scripts/index.js' // точка входа
  },
  output: { // точка выхода
    path: path.resolve(__dirname, 'dist'), // путь к точке выхода
    filename: 'main.js', // имя файла
    publicPath: '',
  },
  mode: 'development', // добавляем режим разработчика
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    open: true, // сайт будет открываться сам при запуске npm run dev
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080 // порт, чтобы открывать сайт по адресу localhost:8080
  },
  module: {
    // rules — это массив правил, добавляем в него объект правил для бабеля
    rules: [{
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
        type: 'asset/resource',
      },
      {
        test: /\.css$/, // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
