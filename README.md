<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
Sistema de Chamados Interno 🛠️

Um sistema de chamados interno com painel administrativo, pensado para empresas que precisam gerenciar solicitações internas de colaboradores de forma organizada e eficiente.

⚙️ Cenário real

Imagine uma empresa onde colaboradores podem abrir chamados internos para:
-Problemas técnicos
-Solicitações de materiais
-Reclamações
-Solicitações de férias, etc.

O setor de TI/Administração recebe e gerencia esses chamados, garantindo que tudo seja resolvido de maneira organizada.

🧱 Funcionalidades
👨‍💼 Usuário comum (Colaborador)

-Cadastro/Login ✅ (em desenvolvimento)
-Abrir novo chamado ✅
-Ver status dos seus chamados ✅(em desenvolvimento)
-Histórico de chamados ✅(em desenvolvimento)

🛠️ Admin (TI/Atendimento)

-Login como administrador ✅ (em desenvolvimento)
-Visualizar todos os chamados ✅
-Filtrar por status, prioridade ou setor ✅
-Atualizar status (Novo, Em andamento, Resolvido) ✅
-Responder chamados ✅
-Dashboard com número de chamados por status/setor ⚡ (em breve)

📊 Dashboard (para Admin)

-Gráfico de chamados por setor ⚡ (em breve)
-Volume de chamados nos últimos 7 dias ⚡ (em breve)

🚀 Diferenciais

-Autenticação com níveis de acesso (admin x comum) ⚡ (em desenvolvimento)
-Sistema parecido com ferramentas reais de help desk
-Arquitetura em camadas para fácil manutenção
-Planejado para integração futura com front-end responsivo

💻 Tecnologias

Linguagem: Java
Framework Backend: Spring Boot
Banco de dados: MySQL
Autenticação: JWT / Spring Security ⚡ (em desenvolvimento)
Frontend: Em desenvolvimento
>>>>>>> 934f397af99bd688786254c4c582193b11197fe5
