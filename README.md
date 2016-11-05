# EBM NFP

## Aplicação WEB para Controle do BOT (Client)

<p>Esta aplicação tem como objetivo fazer o controle do BOT-API e disponibilizar ao usuario informações relevantes sobre a situação de cadastro no site da receita dos cupons inseridos pelo aplicativo mobile do projeto EBM NFP. Para fazer isso está aplicação se comunica com a API-BOT desenvolvida em Node.JS + Express + Selenium. No desenvolvimento desta aplicação estão sendo utilizadas as linguagens:</p>

  <ul>• De Marcação - HTML;</ul>

  <ul>• De Folhas de Estilo - CSS;</ul>

  <ul>• De Programação - Javascript.</ul>

<p>Junto a estas linguagens também estão sendo usadas as ferramentas:</p>

  <ul>• Node.js 4.5.0;</ul>

  <ul>• NPM 2.15.9;</ul>

  <ul>• Http-Server 0.9.0;</ul>

  <ul>• Angular.js 1.5.8;</ul>

  <ul>• Bootstrap 3.3.7;</ul>

  <ul>• Atom 1.12.0.</ul>

<p>Com o desenvolvimento desta aplicação foi criado um arquivo "index.html" que importa todas as bibliotecas e arquivos necessários para o funcionamento da aplicação e o arquivo "app.js" que cria o modulo da aplicação dentro do Angular.js e faz a injeção das bibliotecas utilizadas dentro do projeto. Esta aplicação pode ser dividida em 2 partes principais:</p>

   <ul>•	Log-In:

   <p>Parte Responsavel pelas verificações de segurança da aplicação, como o proprio Log-In e os mecanismos de recuperação de senha;</p></ul>

   <ul>•	Controle:

   <p>Gerencia as informações disponibilizadas pela API e faz o controle das operações do BOT, inserindo no site da receita federal os cupons e chaves cadastrados no sistema EBM NFP.</p></ul>

Para a utilização deste aplicativo é necessario se ter instalado a ferramenta Node.js e seu gerenciador de packages NPM, com a instalação de ambas a ferramentas deve-se então:

  1. A partir do console do sistema operacional instalar o modulo "http-server" globalmente com o seguinte comando: "npm install http-server -g";


  2. Com o módulo "http-server" instalado deve-se entrar na pasta do projeto, utilizando o console, e colocar o projeto no ar com o comando: "npm start";

  3. Assim que o projeto estiver no ar uma janela de um browser será aberta mostrando a tela de Log-In do sistema, onde deverá ser informado um email e senha;

  4. Com o termino do Log-In será possivel ao usuario verificar as informações disponibilizadas pelo sistema e fazer o cadastro de cupons e chaves no site da receita federal;

  5. Também é possivel a realização do Log-Out.
