context('Login', () => {

    it('Login - Botão de login', () => {
        cy.visit('https://www.gov.br')
        cy.get('#barra-govbr').shadow().find('span.login-text').click();
        cy.url().should('include', 'https://sso.acesso.gov.br/login')
    });

    it('Login - Digitar letras e símbolos no campo de cpf', () => {
        cy.visit('https://sso.acesso.gov.br')
        cy.origin('https://sso.acesso.gov.br', () => {
            cy.get('#accountId').clear().type('@teste').should('have.value', '')
        });
    });
});