# Explicação do CRUD

O CRUD é um acrônimo que significa **Create** (Criar), **Read** (Ler), **Update** (Atualizar) e **Delete** (Excluir), que são as quatro operações fundamentais em aplicativos de gerenciamento de dados. Essas operações são essenciais para o gerenciamento de recursos em praticamente qualquer aplicação web, permitindo criar, ler, modificar e remover dados.

## 1. Create (Criar)

Essa operação insere novos dados no banco de dados.

**Exemplo SQL**:

```sql
INSERT INTO usuarios (nome, email, senha)
VALUES ('Ana', 'ana@exemplo.com', 'senha123');
```

No contexto de uma aplicação web, essa operação seria usada para criar novos registros, como ao criar um novo usuário.

---

## 2. Read (Ler)

Essa operação consulta e exibe dados do banco de dados.

**Exemplo SQL**:

```sql
SELECT * FROM usuarios;
```

Essa operação seria usada para ler ou exibir informações, como listar todos os usuários cadastrados em uma tabela ou interface web.

---

## 3. Update (Atualizar)

Essa operação modifica dados existentes no banco de dados.

**Exemplo SQL**:

```sql
UPDATE usuarios
SET email = 'ana.novo@exemplo.com'
WHERE id = 1;
```

Isso seria utilizado, por exemplo, quando um usuário deseja atualizar seu email ou alterar suas preferências.

---

## 4. Delete (Excluir)

Essa operação remove dados do banco de dados.

**Exemplo SQL**:

```sql
DELETE FROM usuarios
WHERE id = 1;
```

Ela seria aplicada, por exemplo, para permitir que um usuário apague sua conta ou um administrador exclua registros obsoletos.