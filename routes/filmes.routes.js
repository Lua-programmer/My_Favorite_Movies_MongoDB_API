//ROTAS => SÃO AS RESPONSAVEIS PELOS METODOS DA API

const express = require('express');
const FilmesController = require('../controllers/filmes.controller');

const router = express.Router();
const filmesController = new FilmesController();

//[GET] /filmes
router.get('/', filmesController.getFilmes);

//[GET] /filmes/id
router.get('/:id', filmesController.getFilmesById);

//[POST] /filmes
router.post('/', filmesController.createFilme);




module.exports = router;