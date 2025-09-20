const html = async () => {
  return  /*html*/`
  <div id="contato">
    <div class="container">
      <div class="row justify-center">
        <div class="col col-4">
          <div class="card pad-30">
            <h3 class="section-title mar-0">Contato</h3>
            <form>
              <label class="label">Nome</label>
              <input type="text" class="input-text" name="name" placeholder="Nome">
              <label class="label">E-mail</label>
              <input type="text" class="input-text" name="email" placeholder="E-mail">
              <label class="label">Telefone</label>
              <input type="text" class="input-text" name="phone" placeholder="Telefone">
              <label class="label">Mensagem</label>
              <textarea type="text" class="input-textarea" name="message" placeholder="Mensagem"></textarea>
              <button class="button">
              Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}

module.exports = { html } 