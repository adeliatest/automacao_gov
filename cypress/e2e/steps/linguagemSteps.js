import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que estou na página inicial do gov', () => {
  cy.visit('https://www.gov.br')
});

When('clico no botão de mudança de linguagem', () => {
  cy.get('#barra-govbr')
    .shadow()
    .find('div.overlay-wrapper')
    .click();
});

And('a opção {string} já está selecionada', (idioma) => {
    if (idioma === "PT") {
    cy.get('#barra-govbr')
      .shadow()
      .find('a[href="https://www.gov.br/pt-br"]')
      .click();
  }
});

And('seleciono a opção {string}', (idioma) => {
  cy.get('#barra-govbr').shadow().find('i.fa-angle-down').click();

  if (idioma === "EN") {
    cy.get('#barra-govbr')
      .shadow()
      .find('a[href="https://www.gov.br/en?set_language=en"]')
      .click();
  }

  if (idioma === "ES") {
    cy.get('#barra-govbr')
      .shadow()
      .find('a[href="https://www.gov.br/es?set_language=es"]')
      .click();
  }
});

Then('a url da página deve mudar para {string}', (urlEsperada) => {
  cy.url().should('include', urlEsperada);
});

Then('a url da página deve permanecer {string}', (urlEsperada) => {
  cy.url().should('include', urlEsperada);
});
