//MODEL => É RESPONSÁVEL PELOS DADOS E FUNÇÕES DO BANCO DE DADOS

const mongoose = require('mongoose'); //Importando o mongoose

const FilmeModel = new mongoose.Schema({
    nome: { type: String, required: true},
    genero: { type: String, required: true},
    nota: { type: Number, required: true},
    imagem: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now}
})

const Filme = mongoose.model("filmes, FilmeModel");

module.exports = Filme;