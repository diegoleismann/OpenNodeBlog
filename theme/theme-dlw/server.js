const express = require('express');
const fs = require('node:fs')
const { createSSRApp } = require('vue');
const { renderToString } = require('vue/server-renderer');
const template = require('./index.js').default
const appVue = require('./public/app.js').default
const server = express();
const { createVuetify } = require('./public/modules/vuetify.esm.js')
const HeaderComponent = require('./public/components/header.js').default
const HomeComponent = require('./public/components/home.js').default
const PortifolioComponent = require('./public/components/portifolio.js').default
const ServicosComponent = require('./public/components/servicos.js').default
const BlogComponent = require('./public/components/blog.js').default

server.use(express.static('public'))
server.get(['/', '/:page'], async (req, res) => {
    // Create a new Vue app instance for each request
    const app = createSSRApp(appVue);
    app.use(createVuetify())
    app.component('HeaderComponent', HeaderComponent)
    app.component('HomeComponent', HomeComponent)
    app.component('PortifolioComponent', PortifolioComponent)
    app.component('ServicosComponent', ServicosComponent)
    app.component('BlogComponent', BlogComponent)
    try {
        const html = await renderToString(app, {})

        const config = {
            html: html,
            title: '',
            head: '',
            scripts: await fs.readFileSync('./main.html', 'utf-8')
        }
        res.send(template(config));
    } catch (error) {
        console.error('SSR Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

server.listen(8000, () => {
    console.log('Server is listening on http://localhost:8000');
});

