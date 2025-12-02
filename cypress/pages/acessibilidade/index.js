import { elements as el } from "./elements";

class Acessibilidade {
    visitarPaginaAcessibilidade() {
        cy.visit('https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital')
    }
    clicarNoCard(titulo) {
        if (titulo == "Material de apoio") {
            cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/material-de-apoio"] span.titulo').should('have.text', 'Material de apoio').click({ force: true });
        }

        if (titulo == "Cursos") {
            cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/cursos"] span.titulo').click({ force: true });
        }

        if (titulo == "Modelo de acessibilidade") {
            cy.get('#content span.fa-universal-access').click({ force: true });
        }
    }
    verificarBreadcrumb(texto) {
        cy.get('#breadcrumbs-current').should('have.text', texto);
    }
}

export default new Acessibilidade()