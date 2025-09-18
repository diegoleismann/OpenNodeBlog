const template = /*html*/`
  <div
    id="header"
    class="w-100"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-space-between"
        >
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
        </v-col>
      </v-row>
    </v-container>
  </div>
`
export default {
  name: "HeaderComponent",
  template
}