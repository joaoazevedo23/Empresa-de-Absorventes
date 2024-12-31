# Empresa de Absorventes Auren
Um aplicativo web feito em React e Vite, sendo uma Landing Page de uma empresa de absorventes fictícia chamada Auren, com conexão a um banco de dados em um servidor local.

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
-  ***Git e GitHub*** para manutenção das versões

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
- Git 
- Node.js (versão utilizada: v22.12.0)
- npm ou yarn
- XAMPP (versão utilizada: v8.2.12)

## Instalação e Uso
1. **Obtenha o repositório do projeto:**
   - **Opção 1:** Clone este repositório usando o Git:  
     ```bash
     git clone https://github.com/joaoazevedo23/Empresa-de-Absorventes.git
     ```
   - **Opção 2:** Baixe o arquivo ZIP diretamente do GitHub. Vá até a página do repositório, clique em "Code" e, em seguida, selecione "Download ZIP". Depois, extraia os arquivos para o local desejado. (Após extrair os arquivos, atenção: o GitHub adiciona o sufixo -main na pasta, criando algo como Empresa-de-Absorventes-main. Remova o -main e mantenha apenas uma pasta chamada Empresa-de-Absorventes.).

2. **Mova os arquivos:**  
   Após obter os arquivos, mova a pasta do projeto `Empresa-de-Absorventes` para o seguinte caminho:  `C:\xampp\htdocs`

    Isso permitirá que o servidor local do XAMPP tenha acesso aos arquivos.

3. **Configure o banco de dados:**
- Abra o XAMPP e ative os módulos **Apache** e **MySQL**.
- Acesse o **phpMyAdmin** (geralmente disponível em `http://localhost/phpmyadmin`) e importe o arquivo SQL do banco de dados, 'bdforms', que está no repositório na pasta `bd`.

4. **Instale as dependências do projeto:**  
Na pasta do projeto, rode o comando:
`npm i`

5. **Inicie o servidor de desenvolvimento:**
   `npm run dev`
Isso iniciará a aplicação em `http://localhost:5173`, salvo em casos de conflito de portas (ver nota abaixo).

### Nota sobre a porta de desenvolvimento
Se a porta padrão `5173` estiver ocupada, o Vite pode abrir o projeto em outra porta. Caso isso ocorra, altere manualmente a variável `$port` no arquivo `forms.php`, localizado em:
`C:\xampp\htdocs\Empresa-de-Absorventes\src\forms.php`

Altere o valor da variável `$port` no início do arquivo:

`$port = '5173'; // Substitua "5173" pela porta exibida no terminal`

## Contato
- Nome: João Paulo Ferreira de Azevedo
- Email: joaopaulofa23@gmail.com
