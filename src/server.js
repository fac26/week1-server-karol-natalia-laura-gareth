const express = require('express');
// const {home} = require
const server = express();

server.get('/', (req, res) => {
    res.send('Hello Big World!');
});

module.exports = server;
// Always keep module.exports at the bottom of the file
