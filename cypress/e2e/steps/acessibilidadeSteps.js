/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('que estou na página de acessibilidade do gov', () => {
    cy.visit('https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital')
})

When('clico no card de {string}', (titulo) => {

    if (titulo == "Material de apoio") {
        cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/material-de-apoio"] span.titulo').should('have.text', 'Material de apoio').click({ force: true });
    }

    if (titulo == "Cursos") {
        cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/cursos"] span.titulo').click({ force: true });
    }

    if (titulo == "Modelo de acessibilidade") {
        cy.get('#content span.fa-universal-access').click({ force: true });
    }
})

Then('o breadcrumb é exibido corretamente com o texto {string} no final', (texto) => {
    cy.get('#breadcrumbs-current').should('have.text', texto);
})