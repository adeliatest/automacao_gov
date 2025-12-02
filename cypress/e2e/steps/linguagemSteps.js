import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// importa pageObject de linguagem
import Linguagem from '../../pages/linguagem';

// Verificação da url do botão de linguagem
Given('que estou na página inicial do gov', () => {
  Linguagem.visitarPaginaInicial();
});

When('clico no botão de mudança de linguagem', () => {
  Linguagem.clicarBotaoDeLinguagem();
});

And('a opção {string} já está selecionada', (idioma) => {
  Linguagem.portuguesJaSelecionado(idioma);
});

And('seleciono a opção {string}', (idioma) => {
  Linguagem.selecionarOutraLinguagem(idioma);
});

Then('a url da página deve mudar para {string}', (urlEsperada) => {
  Linguagem.validacaoUrlLinguagem(urlEsperada);
});

Then('a url da página deve permanecer {string}', (urlEsperada) => {
  Linguagem.validacaoUrlLinguagem(urlEsperada);
});
