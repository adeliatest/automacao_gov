      #language: pt

      Funcionalidade: Login

      Garantir a que o botão de login funciona corretamente e que somente
      entradas válidas são aceitas no campo CPF

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