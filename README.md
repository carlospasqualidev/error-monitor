# Default-Backend-Project

Este projeto tem a finalidade de receber atravez de requisição um erro e salva-lo no MongoDB, tambem envia uma mensagem a um canal do discord contendo um log completo do erro. Desenvolvi do absoluto zero reunindo todo meu conhecimento para desenvolve-lo, utilizei das melhores técnicas e tecnologias da atualidade.

## 🚀 Clonando o repositório 🚀

Após clonar o repositório, partiremos para algumas informações básicas.

### 📋 O Projeto 📋

Os pacotes listados abaixo já estão configurados para facilitar e agilizar o desenvolvimento.

#### 📦 Pacotes 📦

- EditorConfig
- Eslint
- Prettier
- Husky
- LintStaged
- Prettier
- Swagger

#### 🖥️ Tecnologias 🖥️

- NodeJS
- Typescript
- Prisma
- Express
- MongoDB
- Helmet

### ⚙️ Executando o projeto ⚙️

Qualquer configuração que necessite interferência do usuário acompanha o prefixo //CHANGE HERE

#### 🗂️ Estrutura de pastas 🗂️

```
> Grupo
  > Tipagens
  > Módulo
    > Controllers
      > Subgrupos
        > Funções
        > Rotas
  > Services
    > Classe de serviços
```

#### 🌎 Alterando .env 🌎

```
DATABASE_URL=mongodb+srv://admin:URLDATABASE?retryWrites=true&w=majority
DISCORD_TOKEN=TOKENDISCORD
```

#### 🧩 Configurando Cors 🧩

```
//CHANGE HERE
const allowedOrigins = [
  'urlDoSeuFrontEnd',
  'urlDoSeuFrontEnd'
];
```

## ✒️ Desenvolvido por

- [Carlos Pasquali](https://github.com/carlospasqualidev) 💀
