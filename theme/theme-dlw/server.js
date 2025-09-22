const express = require('express');
const Index = require('./index.js')
const server = express();



server.use(express.static('public'))
server.get('/post/:url', async () => {

})
server.get(['/', '/:page'], async (req, res) => {

    try {
        const index = await Index.html();
        console.log(index);
        res.send(index);
    } catch (error) {
        console.error('SSR Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

server.listen(80, () => {
    console.log('Site Rodando!');
});

