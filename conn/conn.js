//COMANDOS NO TERMINAL
//npm i mongoose@5.13.8 => Para instalar o mongoose (O Mongoose é uma biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação.)

const mongoose = require('mongoose'); //Importando o mongoose;

//url de conexão = mongodb://servidor:porta/banco

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/filmes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => console.log('Erro no Mongo', err))
}

//O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
//O método catch() retorna uma Promise e lida apenas com casos rejeitados.


//Exportando a const Conn
module.exports = Conn;