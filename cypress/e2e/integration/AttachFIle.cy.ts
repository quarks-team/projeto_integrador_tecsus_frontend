/// <reference types="cypress" />
import { mount } from 'cypress/vue';
import AttachFile from '../../../src/components/AttachFile.vue'; // Atualize o caminho se necessário

describe('Teste para upload de arquivos', () => {
  it('deve verificar a visibilidade do componente AttachFile', () => {
    // Montar o componente Vue
    mount(AttachFile);

    // Verificar se o título "Importar Dados" está visível após a transição
    cy.contains('Importar Dados').should('be.visible');

    // Aguardar até que o componente pai (.container-anexo) seja visível após a transição
    cy.get('.container-anexo', { timeout: 10000 }).should('be.visible');

    // Mapear o componente AttachFile
    cy.get('.container-anexo').within(() => {
      cy.get('.anexar').as('attachFile');

      // Verificar se o input de arquivo está presente dentro de AttachFile
      cy.get('@attachFile').find('input[type="file"]').should('exist');

      // Realizar interações específicas, como anexar um arquivo
      cy.get('@attachFile').find('input[type="file"]').attachFile('example.csv');

      // Verificar se o botão de upload está presente e clicar nele
      cy.get('@attachFile').find('button').should('exist').click();
    });

    // Adicionar verificações adicionais conforme necessário
  });
});
