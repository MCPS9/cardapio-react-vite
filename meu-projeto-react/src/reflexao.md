

Mesmo usando o .map(), o código ainda fica meio engessado, porque a estrutura visual de cada lanche continua presa dentro do loop principal. Então, se precisar mudar algo simples — como a fonte do preço ou adicionar uma foto — você acaba mexendo no meio da lógica de repetição, o que dificulta a manutenção. Além disso, os dados (nomes e preços) ficam misturados com o visual, deixando tudo menos organizado.

Se fossem 30 itens, o App.jsx viraria um arquivo enorme, cansativo de ler e difícil de navegar. Isso aumenta o risco de erros pequenos quebrarem o site inteiro e também impede o reaproveitamento do “layout do lanche” em outras partes do projeto.

Por isso, em projetos reais, o ideal é separar as responsabilidades: criar um componente próprio para cada item do cardápio e deixar os dados em um arquivo separado. Assim, o código fica mais limpo, modular, organizado e fácil de expandir sem dor de cabeça.

componentização deixou o projeto com um pouco mais de arquivos, então o número total de linhas aumentou. Porém, cada arquivo ficou menor, mais organizado e com uma responsabilidade específica. O App.jsx, por exemplo, passou a focar apenas em listar os componentes <ItemCardapio />, sem carregar toda a estrutura visual dos itens.

Outra vantagem é a manutenção: para mudar a cor de fundo dos cards, basta alterar um único lugar no CSS (.item-container), e todos os itens são atualizados automaticamente.

Os dados, como nome e preço, chegam ao componente através das Props do React. No App.jsx, os valores são enviados como atributos (nome, preco), e no ItemCardapio.jsx eles são recebidos pela função do componente.

No fim, o .map() ajuda a evitar repetição, mas a combinação de componentização e Props é o que realmente deixa o código organizado, reutilizável e preparado para crescer.

Uma variável comum (let total = 0) não atualiza a tela porque o navegador não percebe sozinho que o valor mudou. Já o useState avisa o React sobre a alteração e faz um re-render do componente, atualizando a interface automaticamente.

O número total do pedido precisou ficar no App.jsx, porque ele representa um estado geral compartilhado entre todos os itens. Se o estado estivesse dentro do ItemCardapio, cada lanche teria seu próprio contador separado. Essa ideia de colocar o estado no componente pai é chamada de Lifting State Up.

Já a comunicação entre Filho e Pai acontece através de funções passadas como Props. O App cria a função que altera o total e envia essa função para o ItemCardapio. Quando o botão do Filho é clicado, ele executa essa função, fazendo o Pai atualizar o estado.