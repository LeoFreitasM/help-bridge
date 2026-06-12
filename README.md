<div align="center">

<h1>🎫 HelpBridge</h1>
<p><strong>Sistema Full Stack de Gerenciamento de Chamados Internos</strong></p>

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## 📋 Sobre o projeto

O **HelpBridge** é uma aplicação web full stack para gestão de chamados internos (help desk), desenvolvida com backend em **Java + Spring Boot** e frontend em **React + TypeScript**.

O sistema permite que usuários abram chamados, acompanhem o status e que administradores gerenciem, respondam e controlem as solicitações — tudo com autenticação segura via **JWT** e controle de acesso por perfil.

---

## ✨ Funcionalidades

### 👤 Usuários
- Cadastro, edição e remoção de usuários
- Controle de acesso por perfil: `ROLE_USER` e `ROLE_ADMIN`

### 🎫 Chamados (Tickets)
- Criação e listagem de chamados
- Atualização e resposta de chamados
- Controle de **urgência** e **departamento**

### 🔐 Autenticação
- Login com geração de token **JWT**
- Proteção de rotas por perfil
- Controle de sessão seguro

---

## 🛠️ Tecnologias

| Camada | Tecnologias |
|---|---|
| **Backend** | Java, Spring Boot, Spring Security, JWT, JPA/Hibernate, Maven |
| **Frontend** | React, TypeScript, Axios, React Hooks |
| **Banco de Dados** | MySQL |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Java 17+
- Node.js 18+
- MySQL rodando localmente

### Backend

```bash
# Acesse a pasta do backend
cd backend

# Configure o banco de dados em:
# src/main/resources/application.properties

# Execute a aplicação
mvn spring-boot:run
```

> O backend iniciará em: `http://localhost:8080`

### Frontend

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

> O frontend iniciará em: `http://localhost:5173`

---

## 🏗️ Estrutura do projeto

```
help-bridge/
├── backend/          # API REST com Spring Boot
├── frontend/         # Interface com React + TypeScript
├── docs/             # Documentação do projeto
└── README.md
```

---

## 🔗 Comunicação Frontend ↔ Backend

O frontend consome o backend via **Axios**, com todas as requisições autenticadas por token JWT enviado no header `Authorization: Bearer <token>`.

---

<div align="center">

Desenvolvido por **Leonardo Freitas** · [LinkedIn](https://linkedin.com/in/leonardofreitasdev) · [GitHub](https://github.com/LeoFreitasM)

</div>
