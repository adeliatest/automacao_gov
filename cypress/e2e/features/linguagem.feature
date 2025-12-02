#language: pt
Funcionalidade: Linguagem

Verificar a funcionalidade de mudança de linguagem no gov.br

Contexto: Estar na página inicial do gov.br
Dado que estou na página inicial do gov

Cenário: Botão de mudança de linguagem - PT-BR
Quando clico no botão de mudança de linguagem
E a opção "PT" já está selecionada
Então a url da página deve permanecer "https://www.gov.br/pt-br"

Cenário: Botão de mudança de linguagem - EN
Quando clico no botão de mudança de linguagem
E seleciono a opção "EN"
Então a url da página deve mudar para "https://www.gov.br/planalto/en"

Cenário: Botão de mudança de linguagem - ES
Quando clico no botão de mudança de linguagem
E seleciono a opção "ES"
Então a url da página deve mudar para "https://www.gov.br/planalto/es"