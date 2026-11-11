# Eduardo Lopes | Desenvolvedor Full Stack  🚀

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido para demonstrar minhas habilidades, projetos recentes e minha experiência como Desenvolvedor Full Stack, focado na criação de arquiteturas escaláveis e experiências digitais modernas.

## 💻 Sobre o Projeto

O portfólio foi construído com as tecnologias mais recentes do ecossistema front-end, priorizando performance, acessibilidade e design responsivo. O projeto conta com suporte nativo a **Light/Dark Mode** e um sistema de design baseado em componentes modulares.

### 🛠️ Tecnologias Utilizadas

* **[Next.js 16](https://nextjs.org/)** - Framework React com App Router.
* **[React 19](https://react.dev/)** - Biblioteca principal para construção das interfaces.
* **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização via classes utilitárias e variáveis modernas `oklch`.
* **[Shadcn/UI](https://ui.shadcn.com/)** - Componentes de interface reutilizáveis construídos sobre o Radix UI.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior segurança e previsibilidade do código.
* **[Vercel Analytics](https://vercel.com/analytics)** - Monitoramento de tráfego e performance.

## 📂 Estrutura de Diretórios

A arquitetura do projeto foi pensada para ser limpa e modular:

```text
├── app/
│   ├── layout.tsx         # Root layout com configurações de fonte e SEO
│   ├── page.tsx           # Ponto de entrada agrupando as seções do portfólio
│   └── globals.css        # Configurações globais do Tailwind e variáveis de tema
├── components/
│   ├── portfolio/         # Componentes de seção (Hero, About, Projects, etc.)
│   └── ui/                # Componentes base do Shadcn UI (Toast, Buttons, etc.)
├── hooks/
│   ├── use-mobile.ts      # Hook para detecção de viewport mobile
│   └── use-toast.ts       # Gerenciamento de estado das notificações (toasts)
└── lib/
    └── utils.ts           # Funções utilitárias (ex: mesclagem de classes do Tailwind)
🚀 Como Executar o Projeto Localmente
Este projeto utiliza o pnpm como gerenciador de pacotes para builds mais rápidos e otimizados.

Clone o repositório:

Bash

git clone [https://github.com/Eduardolopessd/portif-lio.git](https://github.com/Eduardolopessd/portif-lio.git)
Acesse a pasta do projeto:

Bash

cd SEU_REPOSITORIO
Instale as dependências:

Bash

pnpm install
Inicie o servidor de desenvolvimento:

Bash

pnpm dev
Acesse no navegador:
Abra http://localhost:3000 para ver o projeto rodando.

⚙️ Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes comandos:

pnpm dev: Inicia a aplicação em modo de desenvolvimento.

pnpm build: Cria a versão otimizada para produção.

pnpm start: Inicia o servidor Node.js com a versão de produção gerada.

pnpm lint: Executa o ESLint para encontrar e corrigir problemas no código.

👨‍💻 Autor
Eduardo Lopes Desenvolvedor Full Stack (Java, Next.js, Bancos de Dados, Docker)

Feito com ☕ e dedicação.