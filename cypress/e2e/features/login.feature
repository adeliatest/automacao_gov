      #language: pt

      Funcionalidade: Login

      Garantir a que o botão de login funciona corretamente e que somente
      entradas válidas são aceitas no campo CPF

      Cenário: Login - Botão de login
      Dado que estou na página inicial do gov
      Quando clico no botão de login
      Então a url deverá incluir "https://sso.acesso.gov.br/login"

      Cenário: Login - Validação do campo de CPF
      Dado que estou na página de login do gov
      Quando eu inserir "@teste" no campo de cpf
      Então o campo não deverá aceitar nada além de números

      Esquema do Cenário: Login: Validação do campo de CPF "<cpf>"
      Dado que estou na página de login do gov
      Quando eu inserir "<cpf>" no campo de cpf
      Então o campo não deverá aceitar nada além de números

      Exemplos:
      | cpf    | Descrição                                 |
      | @teste | Digitar letras e símbolos no campo de cpf |
      | !@#$%  | Digitar apenas símbolos no campo de cpf   |