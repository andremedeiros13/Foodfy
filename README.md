
<h1>FOODFY</h1>
      
Foodfy é um projeto realizado durante o Bootcamp da Rocketseat.
     
Um projeto voltado à culinária (um site de receitas, com gerenciamento de usuários), baseado em tecnologias que fazem sentido juntas.

<h2>Como utilizar</h2>

Baixe o projeto com:
git clone() ou Baixe o projeto como zip.

Execute npm install no terminal para instalar as dependências deste projeto.

Configure o acesso ao Banco de dados (utilizando o Postgres), no arquivo src/config/db.js

Caso não possua o banco foodfy com suas tabelas criado, execute os comandos presente no arquivo database.sql.

Após configurar o arquivo db.js e criar o banco, execute o arquivo seed.js (node seed.js) para popular alguns dados e testar a aplicação.

Execute npm start para iniciar a aplicação. Abra o navegador informando o endereço: http://localhost:5000/

Para utlizar o serviço de email, configure o mailtrap no arquivo src/lib/mailer.js, colocando suas credenciais.

Todas as senhas do seed.js são padronizadas ('123'), pegue um email da tabela users e utilize um usuário na rota de login (/users/login).

Considere em limpar o banco eventualmente, executando os comandos finais do arquivo database.sql
