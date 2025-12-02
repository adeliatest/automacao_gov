context('Home', () => {

    // abre a página inicial do gov e testa o botão de login
    it('Home - Botão de login', () => {
        cy.visit('https://www.gov.br')
        cy.get('#barra-govbr').shadow().find('span.login-text').click();
        cy.url().should('include', 'https://sso.acesso.gov.br/login')
    });
});