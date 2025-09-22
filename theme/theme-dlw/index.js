const Header = require('./components/header.js')
const Home = require('./components/home.js')
const Portifolio = require('./components/portifolio.js')
const Servicos = require('./components/servicos.js')
const Blog = require('./components/blog.js')
const Contato = require('./components/contato.js')
const Footer = require('./components/footer.js')
const html = async () => {
  try {
    const header = await Header.html();
    const home = await Home.html();
    const portifolio = await Portifolio.html();
    const servicos = await Servicos.html();
    const blog = await Blog.html();
    const contato = await Contato.html();
    const footer = await Footer.html();
    const template = /*html*/`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Simple SSR</title>
    <link rel="stylesheet" type="text/css" href="/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> 
  </head>
  <body>
    <div id="site">
      ${header}
      ${home}
      ${portifolio}
      ${servicos}
      ${blog}
      ${contato}
      ${footer}
    </div>
    <script src="/form.js" type="text/javascript"></script>
  </body>
  </html>
  `
    return template;
  } catch (e) {
    console.log("Error render index");
    return null
  }
}

module.exports = {
  html
}