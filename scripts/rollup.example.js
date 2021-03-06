import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
  input: 'example/index.js',
  output: [
    {format: 'iife', file: 'example/bundle.js'},
  ],
  plugins: createPlugins()
}]

function createPlugins () {
  return [
    vue({
      css: true
    }),
    babel({
      babelrc: false,
    }),
    resolve({
      module: true
    }),
    commonjs({
      include: [
        'node_modules/**'
      ]
    }),
  ]  
}
