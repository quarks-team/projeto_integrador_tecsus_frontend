module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? 'https://github.com/quarks-team/projeto_integrador_tecsus_frontend' : '/',

  configureVite: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // Garante que os arquivos .js (CommonJS) sejam resolvidos
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },

    module: {
      rules: [
        {
          test: /\.m?js$/, // Lida com arquivos .js e .mjs
          exclude: /(node_modules|bower_components)/, // Exclui módulos
          type: 'javascript/auto',
          use: {
            loader: 'babel-loader', // Usa Babel para transpilar ES6+ em CommonJS
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.cjs$/, // Lida com arquivos .cjs
          exclude: /(node_modules|bower_components)/, // Exclui módulos
          type: 'javascript/auto',
          use: {
            loader: 'rollup-loader' // Usa Rollup para CommonJS puro
          }
        }
      ]
    }
  }
}
