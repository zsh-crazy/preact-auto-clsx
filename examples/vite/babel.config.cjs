module.exports = {
  plugins: [

    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "preact-auto-classnames",
      },
    ],
  ],

};
