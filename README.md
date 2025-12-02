# 🔎 2ª Avaliação - Automação do Gov.br
> Projeto desenvolvido para a 2ª avaliação da disciplina de Qualidade de Software da UNIESP. Consiste em
testes automatizados criados com cypress, para verificar funcionalidades do site do governo (gov.br)

## 💻 Tecnologias e ferramentas
- Vscode
- Cypress 15.7.0
- Cucumber
- Node.js

## 🎯 Funcionalidades testadas
> Todos testados no Chrome
- Botão de mudar linguagem na página inicial
- Campo de CPF na página de login
- Cards na página de acessibilidade
- Botão de login na página inicial

## 📁 Estrutura do projeto
```
 |- cypress/
    |- e2e/
        |- features/
            |- acessibilidade.feature
            |- home.feature
            |- linguagem.feature
            |- login.feature
        |- steps/
            |- acessibilidadeSteps.js
            |- homeSteps.js
            |- linguagemSteps.js
            |- loginSteps.js
        |- acessibilidade.cy.js
        |- home.cy.js
        |- linguagem.cy.js
        |- login.cy.js
    |- fixtures/
    |- pages/
        |- acessibilidade/
          |- elements.js
          |- index.js
        |- home/
          |- elements.js
          |- index.js
        |- linguagem/
          |- elements.js
          |- index.js
        |- login/
          |- elements.js
          |- index.js
    |- support/
        |- commands.js
        |- e2e.js
    |- docs/
        |- cenarios.md
```
## ▶️ Como rodar o projeto
1. Clone o repositórito:
```
git clone https://github.com/adeliatest/automacao_gov.git
```
2. Instale as depêndencias:
```
npm install
```
3. Abra a interface do cypress e rode os testes:
```
npx cypress open
```
4. Ou rode os testes sem interface (headless):
```
npx cypress run
```

## ✅ Boas práticas
- Nomenclatura
- Código comentado
- Utilização de pageObject
- Reutilização de steps
