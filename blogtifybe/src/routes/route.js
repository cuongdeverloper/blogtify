const express = require('express');
const { addUser } = require('../controller/UserController');
const { checkAccessToken } = require('../middleware/JWTAction');
const { apiLogin, apiRegister, verifyOtp } = require('../controller/AuthController');

const routerApi = express.Router();
routerApi.post('/user', checkAccessToken,addUser);
routerApi.post('/login',apiLogin);
routerApi.post('/register',apiRegister);
routerApi.post('/verify-otp', verifyOtp);
module.exports={routerApi}