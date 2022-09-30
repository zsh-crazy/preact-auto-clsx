module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-typescript', { jsxPragma: 'h' }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'preact-auto-classnames',
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ]
  ],
};
