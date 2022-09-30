import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import { resolve } from 'path';
export default [
  {
    input: './src/index.js',
    output: [
      { format: 'cjs', file: "jsx-runtime/index.js", exports: 'auto',sourcemap:true },
      { format: 'esm', file: 'jsx-runtime/index.mjs',sourcemap:true},
    ],
    plugins: [
      nodeResolve({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
        exclude: '**/node_modules/**',
      }),
      commonjs(),

    ],
  },

  {
    input: resolve(__dirname, './src/index.d.ts'),
    output: [{ file: resolve(__dirname, './jsx-runtime/index.d.ts'), format: 'es' }],
    plugins: [
      nodeResolve(),
      commonjs(),
      dts()
    ],

  },
];
