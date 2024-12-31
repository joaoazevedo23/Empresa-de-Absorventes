# Empresa de Absorventes Auren
Um aplicativo web feito em React e Vite, sendo uma Landing Page de uma empresa de absorventes fictícia chamada Auren, com conexão à um banco de dados em um servidor local.

## Descrição
O projeto foi desenvolvido utilizando algumas tecnologias, sendo a principal delas o React.
Ele utiliza:  
- **React** para a criação de componentes e gerenciamento do estado.  
- **SCSS** para estilização personalizada.  
- **React Router** para navegação entre as páginas.
-  **Vite** como ferramenta de build para proporcionar um ambiente de desenvolvimento rápido e eficiente.  
-  **MySQL Workbench** para criação do banco de dados.
-  **XAMPP** como servidor local
-  **phpMyAdmin** como gerenciador do banco de dados

O arquivo principal é o `main.jsx`, onde os componentes são conectados e a ordem de exibição é definida.


## Funcionalidades
- Página inicial com informações sobre a empresa fictícia e o catálogo de produtos.  
- Navegação dinâmica entre diferentes seções, como a seção com informações sobre a empresa e o formulário de contato.  
- Design responsivo utilizando SCSS.
- Formulário de contato conectado à um banco de dados em um servidor local.
  
## Linguagens utilizadas
- JSX
- SCSS
- PHP
- HTML
- SQL  

## Pré-requisitos para instalação
- Node.js (versão utilizada: v22.12.0)
- npm ou yarn
- XAMPP (versão utilizda: 8.2.12)

## Instalação e Uso
1. Clone este repositório:  
   ```bash
   git clone https://github.com/joaoazevedo23/Empresa-de-Absorventes.git

2. Vá até a pasta do projeto: 'Empresa-de-absorventes' e a insira nesse caminho: `C:\xampp\htdocs`, para que ela possa ter as conexões necessárias com o servidor XAMPP.

3. Inicie o XAMPP e ative as opções MySQL e Apache, entrando no Admin do MySQL e adicionando o banco manualmente ao gerenciador phpMyAdmin do XAMPP.

4. Após terminar os outros passos, instale as dependências no arquivo da aplicação:
   npm i

5. Inicie o servidor de desenvolvimento:
   npm run dev

OBS: A aplicação está programada para retornar a porta 5173, que é a porta do servidor de desenvolvimento padrão. Caso esta porta esteja ocupada em seu computador e a aplicação iniciar automaticamente em outra porta, vá pelo caminho `C:\xampp\htdocs\Empresa-de-Absorventes\src\forms.php` e altere no arquivo `forms.php` o valor da variável ´$port´, que está bem no topo da página neste arquivo.

## Contato
- Nome: João Paulo Ferreira de Azevedo
- Email: joaopaulofa23@gmail.com
