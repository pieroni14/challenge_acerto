# challenge_acerto
Projeto de Automação usando Cypress sendo executado no site: https://buger-eats.vercel.app/

Primeiro cenário: Validar com sucesso o cadastro de um entregador. (Teste de Ponta a Ponta - E2E)

Segundo cenário: Validar todos os campos até encontrar um cenário onde o cadastro do entregador não tenha sucesso.

Possíveis Problemas Identificados:

1- Campo de WhatsApp - Falha na Indicação de Obrigatório:
O campo de WhatsApp não apresenta indicação clara de que é obrigatório preenchê-lo. Ao submeter o formulário com esse campo em branco, nenhuma mensagem de erro é exibida para informar o usuário sobre a necessidade de preenchimento.

2- Campo de WhatsApp - Ausência de Mensagem de Erro ao Submeter em Branco:
A submissão do formulário com o campo de WhatsApp vazio não resulta em uma mensagem de erro apropriada. Isso deveria alertar o usuário sobre a exigência de preenchimento desse campo.

3- Método de Entrega - Seleção Múltipla Incoerente:
O método de seleção de entrega permite a seleção de todas as três opções simultaneamente. Entretanto, o sistema aparentemente não aceita a submissão com mais de um método selecionado. Isso cria uma incoerência, visto que o usuário pode escolher opções sem que isso tenha efeito prático.


Sugestões para Melhoria:

1- Campo de WhatsApp - Indicação de Obrigatório:
Colocar um asterisco (*) ou outro indicador visual junto ao campo de WhatsApp para indicar claramente sua obrigatoriedade. Isso auxiliará os usuários a entender que é necessário preencher esse campo antes de submeter o formulário.

2- Campo de WhatsApp - Mensagem de Erro ao Submeter em Branco:
Implementar uma validação que mostre uma mensagem de erro ao tentar submeter o formulário com o campo de WhatsApp em branco. A mensagem deverá indicar que o campo é obrigatório e instruir o usuário a preenchê-lo antes de prosseguir.

3- Método de Entrega - Seleção Única:
Reestruturar o mecanismo de seleção dos métodos de entrega para permitir a seleção de apenas uma opção. Isso eliminará a confusão causada pela possibilidade de selecionar múltiplas opções, mesmo que não sejam aceitas na submissão.
