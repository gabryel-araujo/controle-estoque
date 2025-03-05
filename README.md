# Controle de Estoque 📦

## 📌 Sobre o Projeto
O **Controle de Estoque** é uma API desenvolvida com **Node.js, Express, Prisma e PostgreSQL** para gerenciar produtos, usuários e movimentações de estoque de forma eficiente. O objetivo é fornecer um sistema para o controle de entradas e saídas de produtos além de fornecer a geração de relatórios de estoque atual.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no servidor
- **Express.js** - Framework web minimalista para Node.js
- **Prisma** - ORM para manipulação de banco de dados
- **PostgreSQL** - Banco de dados relacional

## 📂 Estrutura do Projeto

```
/src
  ├── controllers       # Lógica dos endpoints
  ├── routes            # Definição das rotas da API
  ├── prisma            # Configuração do Prisma ORM
  ├── server.js         # Ponto de entrada da aplicação
```

## 🛠 Endpoints da API

### 📌 **Usuários**
| Método | Rota               | Descrição                      |
|--------|--------------------|--------------------------------|
| GET    | `/api/usuarios`    | Lista todos os usuários       |
| POST   | `/api/usuarios`    | Cria um novo usuário          |
| PUT    | `/api/usuarios/:email` | Atualiza um usuário pelo e-mail |
| DELETE | `/api/usuarios/:email` | Remove um usuário pelo e-mail   |

### 📌 **Ainda resta implementar: Categoria, Fornecedor, MovimentoEstoque e Produto ** 
