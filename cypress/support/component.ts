import { mount } from 'cypress/vue2';
import '../../src/styles.css'; // Importar qualquer estilo global

// Registra o mount como um comando global
Cypress.Commands.add('mount', mount);