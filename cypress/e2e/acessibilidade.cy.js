context('Acessibilidade', () => {
    // abre a página de acessibilidade do gov
    beforeEach(() => {
        cy.visit('https://www.gov.br/governodigital/pt-br/acessibilidade-digital')
    });

    // casos de teste de 3 cards da página
    it('Breadcrumbs - Card de material de apoio', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/material-de-apoio"] span.titulo').should('have.text', 'Material de apoio').click();
        cy.get('#breadcrumbs-current').should('have.text', 'Material de apoio');
    });

    it('Breadcrumbs - Card de cursos', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#content a[href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/cursos"] span.titulo').click();
        cy.get('#breadcrumbs-current').should('have.text', 'Cursos');
    });

    it('Breadcrumbs - Card de modelo de acessibilidade', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#content span.fa-universal-access').click();
        cy.get('#breadcrumbs-current').should('have.text', 'Modelo de Acessibilidade');
    });
});