import { elements as el } from "./elements";

class Home {
    // Botão de login
    visitarPaginaInicial() {
        cy.visit(el.urlInicial)
    }

    clicarNoBotaoDeLogin() {
        cy.get(el.botaoLogin).shadow().find('span.login-text').click();
    }
}

// instância
export default new Home()