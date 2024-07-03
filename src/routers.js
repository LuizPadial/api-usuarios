const express = require('express');
const userController = require('./controller/users');

const routers = express();


routers.get('/users', userController.usersList);
routers.get('/users/:id', userController.userGet);
routers.post('/users', userController.userCreate);
routers.put('/users/:id', userController.userUpdate);

module.exports = routers;