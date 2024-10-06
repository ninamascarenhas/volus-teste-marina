# Desafio Técnico

Este repositório contém a solução para o desafio técnico solicitado, cobrindo diversas áreas de desenvolvimento web e backend. Abaixo separei a estrutura dos arquivos, explicações sobre as soluções implementadas e os passos necessários para rodar o projeto.

## Estrutura de Diretórios

- `filtrar_usuarios.py` e `usuarios.csv`: Implementação do script em Python que filtra usuários com base no domínio de email.
- `tabela_usuarios.sql`: Script SQL para consulta em banco de dados Oracle.
- `Explicacao_NET.md`: Explicação sobre o uso do .NET no desenvolvimento web.
- `front-end (html, css e bootstrap)`: Código que implementa a página HTML estilizada com CSS e Bootstrap.
- `funcionalidade javascript`: Implementação de uma lista de tarefas interativa usando JavaScript.
- `explicacao_crud.md`: Explicação teórica e prática sobre as operações CRUD.
- `bonus-react-app`: Projeto em React que exibe uma lista de itens com a utilização das bibliotecas `react-select` e `react-icons/fa`.

## Detalhes das Implementações

### 1. Python (filtrar_usuarios.py e usuarios.csv)

O script `filtrar_usuarios.py` lê um arquivo CSV (`usuarios.csv`) contendo informações dos usuários (ID, nome e email). O script filtra os usuários que possuem um email com um domínio específico e exibe o ID e o nome dos usuários correspondentes.

- Execução: Para rodar o script, execute o comando:
  ```bash
  python filtrar_usuarios.py
  ```

### 2. Banco de Dados Oracle (tabela_usuarios.sql)

O arquivo `tabela_usuarios.sql` contém uma query SQL que retorna os usuários com status "ATIVO" e cadastrados no ano de 2024, ordenados pela data de cadastro em ordem decrescente.

### 3. .NET (Explicacao_NET.md)

A explicação no arquivo `Explicacao_NET.md` detalha o uso de .NET no desenvolvimento de aplicações web, sua relação com outras tecnologias e exemplos práticos de implementação.

### 4. Front-End (HTML, CSS e Bootstrap)

Esta pasta contém a implementação de uma página web usando HTML, CSS e Bootstrap, que exibe um card de perfil com:

- Imagem de perfil
- Nome completo do usuário
- Breve descrição
- Botão "Seguir"

A página é responsiva, adaptando-se corretamente a diferentes resoluções de tela (desktop e mobile).

### 5. Funcionalidade JavaScript

A implementação de uma lista de tarefas interativa permite:

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas concluídas

O código está limpo, comentado e usa boas práticas para criar uma melhor experiência.

### 6. Fundamentos do CRUD (explicacao_crud.md)

No arquivo `explicacao_crud.md`, apresento uma explicação sobre as operações CRUD (Create, Read, Update, Delete) com exemplos práticos no contexto de uma aplicação web.

### 7. Bônus - React (bonus-react-app)

Este projeto foi desenvolvido utilizando React e tem como objetivo criar uma interface interativa para gerenciar uma lista de compras no Mercadinho da Vólus. A ideia principal é permitir que os usuários interajam com a lista de forma dinâmica e fácil, podendo visualizar os itens que precisam comprar, marcá-los como comprados e adicionar ou remover novos itens de acordo com suas necessidades.

A interface começa com quatro itens já definidos como padrão, apenas para mostrar que já havia conteúdo na lista, permitindo ao usuário um ponto de partida. A partir daí, o usuário pode remover esses itens pré-definidos e adicionar novos itens conforme as categorias disponíveis, como frutas, verduras e outros produtos. Além disso, é possível marcar itens como "comprados", o que ajuda a ter uma visão clara do que já foi adquirido.

Foram utilizadas algumas bibliotecas como `react-select`, que permite a criação de caixas de seleção personalizadas, facilitando a escolha de categorias ao adicionar novos itens à lista e `react-icons/fa`, que oferece ícones que tornam a interface mais amigável e interativa. Além disso, fiz o deploy do mercadinho na Vercel, que pode ser acessado pelo link: https://mercadinho-volus-marina.vercel.app

- Para rodar o projeto, entre na pasta `bonus-react-app` e execute o comando:
  ```bash
  npm install
  npm run dev
  ```

  Dentro dessa pasta existe um arquivo chamado `Explicacao_React.md` detalhando o conceito de componentes em React.

## Como Rodar

1. **Python**: Navegue até a pasta onde está o arquivo `filtrar_usuarios.py` e execute o comando `python filtrar_usuarios.py`.
2. **Oracle**: Execute o script SQL `tabela_usuarios.sql` em seu ambiente Oracle.
3. **React**: Na pasta `bonus-react-app`, execute `npm install` seguido de `npm run dev` para iniciar a aplicação.

## Agradecimentos

Foi um grande prazer desenvolver este projeto e realizar cada um dos desafios propostos. Fiquei muito entusiasmada ao longo de todo o processo!
