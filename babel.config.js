module.export = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs' // Garante que o Babel use CommonJS
      }
    ],
    '@babel/preset-typescript',
    [
      '@vue/babel-preset-jsx',
      {
        compositionAPI: true // Habilitar se estiver usando a Composition API
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
