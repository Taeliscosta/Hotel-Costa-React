# 🏨 Hotel Costa - Sistema de Gestão Hoteleira

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Frontend do sistema de gestão do **Hotel Costa**, desenvolvido como entrega do **Projeto 2** da disciplina de Desenvolvimento Web da Universidade Estadual da Paraíba (UEPB). O sistema está totalmente em produção, com o frontend hospedado na Vercel e o backend no Render.

## 🔗 Links de Produção
- **🌐 Sistema Online (Vercel):** [https://hotel-costa-react.vercel.app](https://hotel-costa-react.vercel.app)
- **⚙️ API Backend (Render):** [https://hotel-costa.onrender.com](https://hotel-costa.onrender.com)
- **📦 Repositório da API:** [GitHub - Hotel-Costa](https://github.com/Taeliscosta/Hotel-Costa)

*(Nota: Adicione aqui o link do Protótipo no Figma e do Vídeo de Apresentação)*

## ✨ Funcionalidades
- **Autenticação:** Login seguro de funcionários integrado diretamente com a API no Render.
- **Dashboard:** Visão geral com métricas dinâmicas de sistema (Total de clientes, quartos disponíveis, reservas ativas).
- **Gestão de Clientes:** Listagem em tabela, cadastro dinâmico e exclusão.
- **Gestão de Quartos:** Visualização em cards (status Ocupado/Disponível) e cadastro de novas acomodações.
- **Gestão de Reservas:** Criação inteligente de reservas (selecionando clientes por nome e filtrando apenas quartos livres) e cancelamento seguro.

## 🛠️ Tecnologias Utilizadas
- **React (Vite):** Componentização e alta performance.
- **React Router:** Roteamento de páginas e proteção de rotas privadas (acesso restrito a usuários logados).
- **Fetch API:** Consumo RESTful do backend na nuvem.
- **CSS3:** Estilização responsiva e interface fiel ao protótipo do Figma utilizando Flexbox e Grid Layout.
- **Deploy:** Vercel (Frontend) e Render (Backend/SQLite).

## 🚀 Como executar localmente (Ambiente de Desenvolvimento)

Caso deseje rodar o projeto em sua máquina:

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/Taeliscosta/Hotel-Costa-React.git
\`\`\`

2. Entre na pasta e instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Crie um arquivo `.env` na raiz do projeto. Por padrão, ele usará o backend em produção no Render, mas você pode apontar para localhost:
\`\`\`env
VITE_API_URL=http://localhost:3000 
\`\`\`

4. Inicie o servidor local:
\`\`\`bash
npm run dev
\`\`\`

## 👨‍💻 Autor
- **Taélis Costa** - Estudante de Ciência da Computação (UEPB)