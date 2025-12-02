/// <reference types="cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
// importa pageObject de home e login
import Home from '../../pages/home'
import Login from '../../pages/login'

// Verificação da url do botão de login
Given('que estou na página inicial do gov', () => {
    Home.visitarPaginaInicial()
})

When('clico no botão de login', () => {
    Home.clicarNoBotaoDeLogin()
})

Then('serei redirecionado para a página de login', () => {
    Login.validacaoPaginaLogin()
})