//CONTROLLER => RESPONSAVEL POR GERENCIAR OS FLUXOS , DEFINE AS REGRAS

const mongoose = require('mongoose');
const FilmesService = require('./../services/filmes.service');

const filmesService = new FilmesService();

class FilmesController {

    getFilmes = async (req, res) => {
        const filmes = await filmesService.findAll();
        res.send(filmes);
    }

    getFilmesById = async (req, res) => {
        const id = req.params.id;

        //VALIDAÇÃO

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send('Id invalido');
            return;
        }

        const filme = await filmesService.findById(id);

        //VALIDAÇÃO

        if (!filme) { 
            res.status(404).send('Filme não encontrado');
            return
        }

        res.status(200).send(filme);
    }

    createFilme = async (req, res) => {
        const filme = req.body;
        const filmeSave = await filmesService.createFilme(vaga);
        res.send({
            message: `Filme ${filmeSave.nome} criado com sucesso!`
        })
    }

}

module.exports = FilmesController;