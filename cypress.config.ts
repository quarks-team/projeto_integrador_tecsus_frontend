import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:5173', // Ajuste a URL conforme necessário
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: '**/*.cy.ts',
  },
})
