const express = require('express');
const { addUser } = require('../controller/UserController');

const routerApi = express.Router();
routerApi.post('/user', addUser)
module.exports={routerApi}