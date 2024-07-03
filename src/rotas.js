const express = require('express');
const userController = require('./controller/users')

const rotas = express();


rotas.get('/users', userController.listarUsuarios)
rotas.get('/users/:id', userController.listarUsuarioId);

module.exports = rotas;