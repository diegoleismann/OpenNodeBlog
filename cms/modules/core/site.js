const express = require('express');
const fs = require('fs');
const compression = require('compression');
const sirv = require('sirv');
const templateHtml = fs.readFileSync('./theme/theme-one/dist/client/index.html', 'utf-8');
const render = require('../../../theme/theme-one/dist/server/entry-server.js')

const app = express()
app.use(compression())
app.use('/', sirv('./theme/theme-one/dist/client', { extensions: [] }))

app.use('/', async (req, res) => {
    try {
        const url = req.originalUrl.replace('/', '')
        template = templateHtml
        console.log(render);
        const rendered = await render(url)

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
        console.log(e)
        res.status(500).end("SITE ERROR")
    }
})

module.exports = app