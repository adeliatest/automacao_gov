/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// importa pageObject de login
import Login from '../../pages/login'

// Validação do campo de cpf
Given('que estou na página de login do gov', () => {
    Login.visitarPaginaLogin()
});

When('eu inserir {string} no campo de cpf', (cpf) => {
    Login.digitarCpf(cpf)
});

Then('o campo não deverá aceitar nada além de números', () => {
    Login.validacaoCampoLogin()
});
