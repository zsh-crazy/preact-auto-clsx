import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import transformFilterCssModule from 'vite-plugin-filter-css-moudle';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    transformFilterCssModule([
      {
        test: /\.s[ac]ss$/i,
        modules: {
          generateScopedName: 'cy_[local]',
        },
      }
    ]),
    preact({
    babel:{
      plugins:[
        [
          "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
          importSource: "preact-auto-clsx",
        },
        "@babel/plugin-auto-react-jsx",
        ]

      ],
    }
  })],
  build:{
    target:"modules",
    reportCompressedSize: false,
    minify: false,
  }

})
