const html = async () => {

  return  /*html*/`
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col col-12 flex">
          <a href="#home">
            <img
              class="logo"
              src="/images/dlw-logo.png"
            />
          </a>
          <nav class="menu">
            <ul class="menu-itens">
              <li class="menu-item"><a href="#portifolio">Portifólio</a></li>
              <li class="menu-item"><a href="#servicos">Serviços</a></li>
              <li class="menu-item"><a href="#empresa">Empresa</a></li>
              <li class="menu-item"><a href="#blog">Blog</a></li>
              <li class="menu-item"><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
`
}
module.exports = {
  html
}