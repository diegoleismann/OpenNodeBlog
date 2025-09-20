const express = require('express');
const Index = require('./index.js')
const server = express();



server.use(express.static('public'))
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

server.listen(8000, () => {
    console.log('Server is listening on http://localhost:8000');
});

