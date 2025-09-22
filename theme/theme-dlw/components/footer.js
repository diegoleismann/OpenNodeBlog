const html = async () => {
  return /*html*/`
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col col-3">
            <div class="footer-logo">
              <img src="/images/dlw-logo.png">
            </div>
            <h4>DLW Agência Online</h4>
            <p> Endereço: Rua Odilo Aloysio Daudt, 423, 14C - Feitoria - São Leopoldo - RS </p>
            <p> Telefone: +55 (51) 98562-3979 (Whatsapp)</p>
            <p> Email: contato@dlw.dev.br</p>
          </div>
          <div class="col col-3">
            <h3>Menu</h3>
            <ul>
              <li><a href="#portifolio">Portifolio</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#empresa">Empresa</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div class="col col-3">
          </div>
          <div class="col col-3">
          </div>
        <div>
      </div>
    </div>
  `
}


module.exports = {
  html
}