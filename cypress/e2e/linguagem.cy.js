context('Linguagem', () => {
    beforeEach(() => {
        cy.visit('https://www.gov.br')
    });

    it('Botão de mudança de linguagem - PT-BR', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#barra-govbr').shadow().find('span.langue-select').should('have.text', 'Idioma atual: PT');
        cy.url('eq', 'https://www.gov.br/pt-br')
    });

    it('Botão de mudança de linguagem - EN', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#barra-govbr').shadow().find('i.fa-angle-down').click();
        cy.get('#barra-govbr').shadow().find('a[href="https://www.gov.br/en?set_language=en"]').click();
        cy.url().should('eq', 'https://www.gov.br/planalto/en')
    });

    it('Botão de mudança de linguagem - ES', () => {
        cy.get('#barra-govbr').shadow().find('div.overlay-wrapper').click();
        cy.get('#barra-govbr').shadow().find('i.fa-angle-down').click();
        cy.get('#barra-govbr').shadow().find('a[href="https://www.gov.br/es?set_language=es"]').click();
        cy.url().should('eq', 'https://www.gov.br/planalto/es')
    });
});