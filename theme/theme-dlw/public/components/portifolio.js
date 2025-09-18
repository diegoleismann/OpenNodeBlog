
const template = /*html*/`
<div id="portifolio">
    <v-container>
      <v-row>
        <v-col><h2 class="section-title text-center">Portifólio</h2></v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <img
            class="w-100"
            src="/images/vg-contabilidade.png"
          />
        </v-col>
        <v-col cols="4">
          <img
            class="w-100"
            src="/images/federacao-gaucha-de-ciclismo.png"
          />
        </v-col>
        <v-col cols="4">
          <img
            class="w-100"
            src="/images/foco-socioambiental.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
`

export default {
  name: "PortifolioComponent",
  template
}