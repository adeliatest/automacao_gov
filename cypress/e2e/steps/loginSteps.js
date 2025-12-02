/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Botão de login

Given('que estou na página inicial do gov', () => {
    cy.visit('https://www.gov.br');
});

When('clico no botão de login', () => {
    cy.get('#barra-govbr')
        .shadow()
        .find('span.login-text')
        .click();
});

Then('a url deverá incluir {string}', (urlEsperada) => {
    cy.url().should('include', urlEsperada);
});

// Validação do campo de cpf

Given('que estou na página de login do gov', () => {
    cy.visit('https://sso.acesso.gov.br');
});

When('eu inserir {string} no campo de cpf', (cpf) => {
    cy.origin('https://sso.acesso.gov.br', { args: { cpf } }, ({ cpf }) => {
        cy.get('#accountId').clear().type(cpf);
    });
});

Then('o campo não deverá aceitar nada além de números', () => {
    cy.origin('https://sso.acesso.gov.br', () => {
        cy.get('#accountId')
            .invoke('val')
            .then((value) => {
                expect(value).to.match(/^[0-9]*$/);
            });
    });
});
