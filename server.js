const express = require('express');
const server = express();

server.use(express.json());

server.get('/TextWrapper/', function (req, res) {
    res.send('nice')
})

server.get('/TextWrapper/get-text-image-data/:text', function (req, res) {
    (async () => {
        res.send('working')
    })()
})