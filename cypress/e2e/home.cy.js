context('Home', () => {

    it('Home - Botão de login', () => {
        cy.visit('https://www.gov.br')
        cy.get('#barra-govbr').shadow().find('span.login-text').click();
        cy.url().should('include', 'https://sso.acesso.gov.br/login')
    });
});