# Conceito de Componentes em React

No React, um componente é um bloco isolado e reutilizável que encapsula a lógica e o visual de uma parte da interface. Componentes podem ser aninhados e reutilizados, o que facilita a construção de interfaces de usuário de forma mais organizada e modular.

## Componentização no Projeto Mercadinho da Vólus

No projeto "Mercadinho da Vólus", utilizei a componentização para exibir itens em listas de compras e itens comprados. Para isso, criei os componentes `ItemCard`, `ItemForm` e `ItemList`, cada um com uma responsabilidade específica, tornando o código mais rápido, limpo e eficiente.

- O componente `ItemCard` é responsável por exibir individualmente cada item na lista, com a possibilidade de editar, remover ou marcar como comprado.
- O componente `ItemForm` foi criado para gerenciar o formulário de adição de novos itens, recebendo as informações e categorias disponíveis.
- O componente `ItemList` centraliza a lógica da aplicação, exibindo tanto os itens a serem comprados quanto os já comprados, além de gerenciar as interações entre os outros dois componentes.

Além disso, usei um arquivo de tipos (`types.ts`) para organizar e definir as estruturas de dados do projeto, como o tipo `ItemProps` e as categorias dos produtos. Isso ajuda a tornar o código mais limpo e escalável, separando responsabilidades e garantindo a reutilização.

### Vantagens de Usar Componentes no React

- **Reutilização**: Cada componente, como o `ItemCard`, pode ser reutilizado para exibir qualquer tipo de item, mantendo a lógica consistente em toda a aplicação.
- **Manutenção**: O código se torna mais fácil de manter, pois cada componente trata apenas de uma parte específica da lógica da aplicação.
- **Organização**: A separação dos componentes, junto com o uso de um arquivo de tipos, torna o código mais organizado e evita a repetição de estruturas.

Esse processo de componentização no React permite que a aplicação seja mais escalável, de fácil manutenção e, ao mesmo tempo, eficiente na execução.
