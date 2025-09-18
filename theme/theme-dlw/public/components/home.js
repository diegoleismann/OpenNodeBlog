const template = /*html*/`
  <div
    id="home"
    class="h-100"
  >
    <v-container class="h-100">
      <v-row class="h-100">
        <v-col align-self="center">
          <div class="text-white">
            <h2 class="title">Design e Tecnologia</h2>
            <span class="subtitle">para transformar o seu negocio.</span>
            <p class="mr-10 mt-5">
              A DLW é especialista em Design e Tecnologia, oferecendo soluções
              que vão desde a criação da identidade visual <br />até o
              desenvolvimento e otimização de sites. <br />Nosso objetivo é
              criar soluções inteligentes que geram <br />melhores resultados
              fortalecendo a identidade da <br />sua marca e conquistando mais
              clientes online.
            </p>
          </div>
        </v-col>
        <v-col
          align-self="center"
          align="center"
        >
          <img
            height="400"
            src="/images/home-layout.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
`
export default {
  name: "HomeComponent",
  template
}
