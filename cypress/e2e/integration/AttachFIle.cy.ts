import { getBaseUrl } from '../../../src/base_urls/baseUrlDynamic';

describe('Upload and Process CSV File with SSE', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should upload a CSV file successfully and listen for SSE', async () => {
    
    const fileName = 'con_agua.csv';
    const baseUrl = await getBaseUrl();

    cy.get('.fa-solid fa-file-csv').click();
    cy.get('input[type="file"]').attachFile(fileName);
    cy.intercept('POST', `${baseUrl}/billing/upload/sse`).as('fileUpload');
    cy.intercept('GET', '/events').as('sse');
    cy.get('.submit').click();

    cy.wait('@fileUpload').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.wait('@sse').its('response.statusCode').should('be.oneOf', [200, 304]);
  
  });
});
