🔗 HELPBRIDGE - Sistema de Gerenciamento de Chamados
Sistema full stack para gerenciamento de usuários e chamados (tickets), com autenticação segura via JWT e controle de acesso baseado em perfis.

🔗FUNCIONALIDADES
👤 Usuários
Cadastro de usuários
Atualização de usuários
Remoção de usuários
Controle de acesso por perfil (ROLE_USER / ROLE_ADMIN)

🎫 Chamados (Tickets)
Criação de chamados
Listagem de chamados
Atualização de chamados
Resposta de chamados
Controle de urgência e departamento

🔐 Autenticação
Login com JWT
Geração de token seguro
Proteção de rotas
Controle de sessão

O sistema é dividido em duas partes:
Backend (Spring Boot)
Frontend (React + TypeScript)

Comunicação via API REST.

🖥️ Comunicação com API
O frontend consome o backend via Axios.

⚙️Backend
# entrar na pasta backend
cd backend

# executar aplicação
mvn spring-boot:run

O backend iniciará em: http://localhost:8080

⚙️Frontend
# entrar na pasta frontend
cd frontend

# instalar dependências
npm install

# iniciar aplicação
npm run dev

O frontend iniciará em: http://localhost:5173

🔗TECNOLOGIAS UTILIZADAS
🖥️ Backend:
Java
Spring Boot
Spring Security
JWT (JSON Web Token)
JPA / Hibernate
Maven

🖥️ Frontend:
React
TypeScript
Axios
Hooks (React Hooks)

🖥️ Banco de dados:
MySQL

👨‍💻 AUTOR
Desenvolvido por Leonardo Freitas.
