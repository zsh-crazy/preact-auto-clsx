module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      //第一种是使用ts-loader去解析
      // { test: /\.tsx?$/, use: 'ts-loader' },
      //这一个是利用babel去转换，此时只有类型校验，className是没有babel处理的，需要再babel中引入preact-auto-classnames
      { test: /\.tsx?$/, use: 'babel-loader' },
    ],
  },
};
