#language: pt

Funcionalidade: Acessibilidade

Verificar a funcionalidade dos breadcrumbs nas páginas de acessibilidade do gov.br

Contexto: Estar na página de acessibilidade do gov.br
Dado que estou na página de acessibilidade do gov

Cenário: Breadcrumbs - Card de material de apoio
Quando clico no card de "Material de apoio"
Então o breadcrumb é exibido corretamente com o texto "Material de apoio" no final

Cenário: Breadcrumbs - Card de cursos
Quando clico no card de "Cursos"
Então o breadcrumb é exibido corretamente com o texto "Cursos" no final

Cenário: Breadcrumbs - Card de modelo de acessibilidade
Quando clico no card de "Modelo de acessibilidade"
Então o breadcrumb é exibido corretamente com o texto "Modelo de Acessibilidade" no final