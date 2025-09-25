
const Blog = require('./components/blog.js')
const Contato = require('./components/contato.js')

module.exports = {
  html: async () => {
    let header = '', home = '', portifolio = '', servicos = '', blog = '', contato = '';
    try {

      home = await Home.html();
      portifolio = await Portifolio.html();
      servicos = await Servicos.html();
      blog = await Blog.html();
      contato = await Contato.html();
    } catch (e) {
      console.log(e);
    }
    return /*html*/`
      ${header}
      ${home}
      ${portifolio}
      ${servicos}
      ${blog}
      ${contato}
    `

  }

}