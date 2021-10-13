//SERVICOS  = > RESPONSAVEIS POR SE CONECTAR COM OS NOSSOS MODELs

const Filme = require('../models/filme'); //Importando o MODEL

class FilmeService {
    findAll = async () => await Filme.find();

    findById = async (id) =>{
        return await Filme.findById(id);
    }

    createFilme = async (filme) => {
        return await Filme.create(filme);
    }
}

module.exports = FilmeService;
