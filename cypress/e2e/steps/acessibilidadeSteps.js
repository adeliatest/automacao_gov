/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Acessibilidade from '../../pages/acessibilidade'

Given('que estou na página de acessibilidade do gov', () => {
    Acessibilidade.visitarPaginaAcessibilidade();
})

When('clico no card de {string}', (titulo) => {
    Acessibilidade.clicarNoCard(titulo);
})

Then('o breadcrumb é exibido corretamente com o texto {string} no final', (texto) => {
    Acessibilidade.verificarBreadcrumb(texto);
})