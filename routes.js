const express = require('express');
const router = express.Router();

const users = require('./user');
const {login} = require('./auth');

function routes(app) {
    /**
     *  @swagger
     *  tags:
     *  - name: "auth"
     *    description: "auth user"
     */
    app.use('/auth', login);
    /**
     *  @swagger
     *  tags:
     *  - name: "user"
     *    description: "work with user"
     */
    app.use('/users', users);
}

module.exports = routes;