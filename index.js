//COMANDOS NO TERMINAL
// npm init -y => para iniciar o projeto instalando o package.json
// npm i express => para instalar o framework "express"
// npm i -D nodemon => para instalar as dependencias do nodemon
// npm i cors => para instalar o cors (mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado.)

// No package.json dentro do scripts colocar:
// "start": "nodemon index",
// "dev": "nodemon index",

const express = require('express'); //Importando o express
const cors = require('cors'); //Importando o cors
const port = 8080;

const app = express(); // Inicializando o express

app.use(express.json());
app.use(cors());

// //TESTE
// app.get("/", (req, res) => {
//     res.send('A aplicação Funfou rsrsrsrs')
// })

app.listen(port, () => console.log(`App listening on http://localhost:${port}/`))