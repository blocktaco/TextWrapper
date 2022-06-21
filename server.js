const express = require('express');
const server = express();

const RenderTextClassHandler = require('./RenderTextClassHandler.js');
server.use(express.json());

server.post('/', function(req, res) {
    (async () => {
        res.send(await RenderTextClassHandler.NewRenderTextAsync(res.json(req.body)))
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})