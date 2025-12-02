import { elements as el } from "./elements";

class Login {
    // Validação do campo de CPF
    visitarPaginaLogin() {
        cy.visit(el.urlLogin)
    }

    digitarCpf(cpf) {
        cy.origin(el.urlLogin, { args: { cpf } }, ({ cpf }) => {
            cy.get('#accountId').clear().type(cpf);
        });
    }

    validacaoCampoLogin() {
        cy.origin('https://sso.acesso.gov.br', () => {
            cy.get('#accountId')
                .invoke('val')
                .then((value) => {
                    expect(value).to.match(/^[0-9]*$/);
                });
        });
    }

    validacaoPaginaLogin() {
        cy.url().should('include', 'https://sso.acesso.gov.br/login')
    }
}

// instância
export default new Login() 