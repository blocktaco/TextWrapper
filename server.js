const express = require('express');
const server = express();

//const RenderTextHandler = require('./RenderTextHandler.js');
server.use(express.json());

server.post('/', function(req, res) {
    res.send('yes')
})

/*server.get('/:id', function (req, res) {
    (async () => {
        res.send(await RenderTextHandler.NewRenderTextAsync(req.params.id))
    })()
})*/

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})