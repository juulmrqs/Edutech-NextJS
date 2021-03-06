<!-- === === === === TEMPLATE MADE BY GBROGIO === === === === === -->

<h1 align="center">
  <a href="localhost:3000">EDUTECH - 2021</a>
</h1>
<h6 align="center">
  🌎 Paraná, Brasil
</h6>
<p align="center">
  <img alt="GitHub número de linguagens" src="https://img.shields.io/github/languages/count/gbrogio/Edutech-NextJS?color=34A853&label=Linguagens&style=for-the-badge">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/gbrogio/Edutech-NextJS?color=34A853&label=Tamanho%20do%20Reposit%C3%B3rio&style=for-the-badge">

  <a href="https://github.com/gbrogio">
    <img alt="Feito por Guilherme Brogio" src="https://img.shields.io/badge/feito%20por-GBrogio-4285F4?style=for-the-badge">
  </a>
  <img alt="GitHub ultimo commit" src="https://img.shields.io/github/last-commit/gbrogio/Edutech-NextJS?color=4285F4&label=Ultimo%20Commit&style=for-the-badge">
</p>
<h5 align="center">🚧  Status do Projeto 🚀 Em construção...  🚧</h3>

### 📄 Índice
- [✨ Recursos](#Recursos)
- [📜 Sobre](#Sobre)
- [👌 Pré-requisitos](#PreRequisitos)
- [📦 Clonar / Instalar](#ClonarInstalar)
- [🔨 Como usar](#Editar)
  - [✏️ Editar](#Editar)
  - [🗺️ Mapa das Pastas](#Mapa)
- [⚒️ Tecnologias](#Tecnologias)
- [👤 Contato](#Autor)

<h1 id="Recursos">✨ Features</h1>

- [X] 📖 Login Com Google
  - [X] 📖 Sair da Conta
  - [X] 📖 Deletar Usuário
- [X] 📖 Componentes
  - [X] 📖 Cartão de Cursos
  - [X] 📖 Botão Acessibilidade
- [X] 📖 Busca por Cursos - Alura
- [X] 📖 Contraste Tema

# <h1 id="Sobre">📜 Sobre</h1>
<p>Site de auxilio aos alunos do programa <b>EDU</b>TECH. Para encontrarem seus cursos de maneira simples, rápida e acessível.
  Algumas curiosidades: <br>
  se em qualquer pagina você digitar "edutech" algo vai acontecer... <br>
  se na pagina de cursos voce digitar "gbrogio" ou "alura" você vai habilitar cards secretos. <br>
  <br>
</p>

Link do Projeto: [Figma](https://www.figma.com/file/sy7bHGmsvnh3DjuhhEjY69/Edutech?node-id=3%3A3) <br>
Link do Site: [edutech-gbrogio.vercel.app](https://www.edutech-gbrogio.vercel.app)

obs: Infelizmente, até o momento, na busca por séries apenas a opção
"1°, 2º e 3º ano Ensino Médio" está funcionado. Isso devido a api utilizada não fornecer os cursos das séries: 6º, 7º, 8º e 9º.
caso o seu curso não esteja aparecendo, ou apareça um curso a mais do previsto. considere informar em:
[![Gmail Badge](https://img.shields.io/badge/-guilhermebrogio.ps@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:guilhermebrogio.ps@gmail.com)](mailto:guilhermebrogio.ps@gmail.com)

# <h1 id="PreRequisitos">👌 Pré-requisitos</h1>
<p>Antes de Começar você precisa ter instalado em seu computador as seguintes ferramentas:
<a href="https://nodejs.org/">Node.js</a>, <a href="https://git-scm.com/">Git</a>, um gerenciador de pacotes como <a href="https://yarnpkg.com/">Yarn</a> ou <a href="https://nodejs.org/">npm</a> e também será necessário um editor de texto/código como <a href="https://code.visualstudio.com/">Visual Studio Code (VSCode)</a>.</p>

# <p id="ClonarInstalar">📦 Clonar / Instalar</p>
Clonar Projeto:
  ```bash
    $  git clone https://github.com/gbrogio/Edutech-NextJS.git
  ```
Instalar Pacotes:
  ```bash
    $  yarn
  ```
  ou
  ```bash
    $  npm i
  ```
Iniciar Servidor / Site:
  ```bash
    $  yarn dev
  ```
  ou
  ```bash
    $  npm run dev
  ```

  Servidor iniciado na “PORTA 3000” do seu navegador, acesse [http://localhost:3000](http://localhost:3000)

# <p id="Editar">✏️ Editar</p>
Dentro da pasta ***src***, você encontrará as pastas: ***Components***, ***Page*** e ***Styles***.
Dentro delas, você pode editar o ***estilo***, ***formato*** e ***comportamento*** do *Site*.
O ***CSS*** do site esta presente dentro da pasta ***Styles*** com o formato em ***.ts***, *Typescript*, ou
dentro das pastas dos componentes com a nomenclatura **style[Componente].ts**.
obs: Ao mexer com a responsividade da pagina, isto é seu tamanho, você deverá atualizar a pagina para
continuar com a experiencia

# <h1 id="Mapa">🗺️ Mapa das Pastas</h1>
  ```bash
    -| |> [public]: Pasta
    -| | |> [json]: Pasta
    -| | |  |> (serie-courses.json): Arquivo
    -| |
    -| | |> (confetti.gif): Arquivo
    -| | |> (edutech.jpg): Arquivo
    -| |
    -| |> [src]: Pasta
    -| | |> [assets/svg]: Pasta
    -| | |  |> (google.svg): Arquivo
    -| |
    -| | |> [components]: Pasta
    -| | |  |> [Accessibility]: Pasta
    -| | |  | |> (index.tsx): Arquivo
    -| | |  | |> (stylesAccessibility.ts): Arquivo
    -| | |  |
    -| | |  |> [Header]: Pasta
    -| | |  | |> (index.tsx): Arquivo
    -| | |  | |> (LinkCp.tsx): Arquivo
    -| | |  | |> (LogoCp.tsx): Arquivo
    -| | |  | |> (Nav.tsx): Arquivo
    -| | |  | |> (styleLink.ts): Arquivo
    -| | |  | |> (styles.ts): Arquivo
    -| | |  | |> (stylesLogo.ts): Arquivo
    -| | |  | |> (stylesUser.ts): Arquivo
    -| | |  | |> (UserCp.tsx): Arquivo
    -| | |  |
    -| | |  |> [Inputs]: Pasta
    -| | |  | |> (ButtonCp.tsx): Arquivo
    -| | |  | |> (InputCp.tsx): Arquivo
    -| | |  | |> (styleButton.ts): Arquivo
    -| | |  | |> (styleInput.ts): Arquivo
    -| | |  |
    -| | |  |> [Layout]: Pasta
    -| | |  | |> (index.tsx): Arquivo
    -| | |  |
    -| | |  |> (CardCp.ts): Arquivo
    -| | |
    -| | |> [context]: Pasta
    -| | |  |> (AuthContext.tsx): Arquivo
    -| | |
    -| | |> [hook]: Pasta
    -| | |  |> (useAuth.ts): Arquivo
    -| | |
    -| | |> [lib]: Pasta
    -| | |  |> (firebase.ts): Arquivo
    -| | |
    -| | |> [pages]: Pasta
    -| | |  |> (_app.tsx): Arquivo
    -| | |  |> (_document.tsx): Arquivo
    -| | |  |> (about.tsx): Arquivo
    -| | |  |> (course.tsx): Arquivo
    -| | |  |> (index.tsx): Arquivo
    -| | |
    -| | |> [scripts]: Pasta
    -| | |  |> (Konami.ts): Arquivo
    -| | |  |> (Navigate.ts): Arquivo
    -| | |
    -| | |> [styles]: Pasta
    -| | |  |> [components]: Pasta
    -| | |  | |> (CardCp.ts): Arquivo
    -| | |  | |> (Dialog.ts): Arquivo
    -| | |  | |> (Icons.ts): Arquivo
    -| | |  | |> (Text.ts): Arquivo
    -| | |  |
    -| | |  |> [global]: Pasta
    -| | |  | |> (Colors.ts): Arquivo
    -| | |  | |> (Global.ts): Arquivo
    -| | |  |
    -| | |  |> [pages]: Pasta
    -| | |  | |> (Pages.ts): Arquivo
    -| | |  |
    -| | |  |> [theme]: Pasta
    -| | |  | |> (contrast.ts): Arquivo
    -| | |  | |> (default.ts): Arquivo
    -| | |  |
    -| | |  |> (styled.d.ts): Arquivo
    -| | |
    -| | |> [utils]: Pasta
    -| | |  |> (usePersisteState.ts): Arquivo
    -| | |
    -| |
    -|
  ```

# <h1 id="Tecnologias">⚒️ Tecnologias</h1>
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Onde o TypeScript, foi a tecnologia utiliza para a construção do código; <br>
Onde o React, foi a tecnologia utilizada para a construção dos componentes e paginas;<br>
Onde o Next.JS, foi a tecnologia utilizada para a renderização dos códigos feitos em React;<br>
Onde o Styled Components, foi a tecnologia utilizada para a estilização da pagina (CSS em JavaScript);<br>
Onde o Firebase, foi a tecnologia utilizada para a autenticação e metodos de login da pagina;<br>
Onde o NodeJS, foi a tecnologia utilizada para manter o Next.JS e outros.<br>

<h1 id="Autor">👤 Contato</h1>

<a href="https://github.com/gbrogio">
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/79169549?s=400&u=b290516661edf038794521fe542f92d74eccb2b8&v=4" width="100" alt=""/>
 <br />
 <sub><b>Guilherme Brogio</b></sub></a> <a href="https://cursos.alura.com.br/user/gbrogio" title="GBrogio">🚀</a>

Feito de 💜 por Guilherme Brogio <br>

[![Gmail Badge](https://img.shields.io/badge/-guilhermebrogio.ps@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:guilhermebrogio.ps@gmail.com)](mailto:guilhermebrogio.ps@gmail.com)
