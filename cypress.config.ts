import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "m3d76y",
  e2e: {
    baseUrl: 'http://localhost:5173/projeto_integrador_tecsus_frontend/',
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
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true
  }
});
