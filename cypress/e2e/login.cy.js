context('Login', () => {

    // testa o campo de cpf da página de login do gov
    it('Login - Digitar letras e símbolos no campo de cpf', () => {
        cy.visit('https://sso.acesso.gov.br')
        cy.origin('https://sso.acesso.gov.br', () => {
            cy.get('#accountId').clear().type('@teste').should('have.value', '')
        });
    });
});