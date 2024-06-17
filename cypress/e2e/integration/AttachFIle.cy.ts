describe('Upload and Process CSV File with SSE', () => {
  beforeEach(() => {
    cy.visit('/importar-dados'); // A rota pode variar conforme a configuração do seu Vue Router
  });

  it('should upload a CSV file successfully and listen for SSE', () => {
    const fileName = 'con_agua.csv';
    

    cy.get('input[type="file"]').attachFile(fileName);
    cy.intercept('POST', 'http://localhost:3000/billing/upload/sse').as('fileUpload');
    cy.intercept('GET', '/events').as('sse');
    cy.get('.submit').click();


    
  });
});
