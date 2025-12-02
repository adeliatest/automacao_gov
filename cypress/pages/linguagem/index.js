import { elements as el } from "./elements";

class Linguagem {
    // Botão de linguagem
    visitarPaginaInicial() {
        cy.visit(el.urlInicial)
    }

    clicarBotaoDeLinguagem() {
        cy.get('#barra-govbr')
            .shadow()
            .find('div.overlay-wrapper')
            .click();
    }

    portuguesJaSelecionado(idioma) {
        if (idioma === "PT") {
            cy.get('#barra-govbr')
                .shadow()
                .find('a[href="https://www.gov.br/pt-br"]')
                .click();
        }
    }

    selecionarOutraLinguagem(idioma) {
        cy.get('#barra-govbr').shadow().find('i.fa-angle-down').click();

        if (idioma === "EN") {
            cy.get('#barra-govbr')
                .shadow()
                .find('a[href="https://www.gov.br/en?set_language=en"]')
                .click();
        }

        if (idioma === "ES") {
            cy.get('#barra-govbr')
                .shadow()
                .find('a[href="https://www.gov.br/es?set_language=es"]')
                .click();
        }
    }

    validacaoUrlLinguagem(urlEsperada) {
        cy.url().should('include', urlEsperada);
    }
}

// instância
export default new Linguagem()