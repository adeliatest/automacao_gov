import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('que estou na página inicial do gov', () => {
    cy.visit('https://www.gov.br')
})

When('clico no botão de login', () => {
    cy.get('#barra-govbr').shadow().find('span.login-text').click();
})

Then('serei redirecionado para a página de login', () => {
    cy.url().should('include', 'https://sso.acesso.gov.br/login')
})