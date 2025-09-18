
const template = /*html*/`
<div id="servicos">
    <v-container>
      <v-row>
        <v-col><h2 class="section-title text-center">Serviços</h2></v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <div class="d-flex justify-center">
            <div class="big-icon">
              <img src="/images/design.png" />
            </div>
          </div>
          <h3 class="service-title">Design</h3>
          <ul class="unstyled-list">
            <li>Design Gráfico</li>
            <li>Design de Aplicativo</li>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Web Design</li>
          </ul>
        </v-col>
        <v-col cols="4">
          <div class="d-flex justify-center">
            <div class="big-icon">
              <img src="/images/desenvolvimento.png" />
            </div>
          </div>
          <h3 class="service-title">Desenvolvimento</h3>
          <ul class="unstyled-list">
            <li>E-commerce</li>
            <li>Front-end</li>
            <li>Aplicativos Mobile</li>
            <li>Projeto MVP</li>
            <li>Desenvolvimento PHP</li>
            <li>Desenvolvimento Web</li>
            <li>Sites em WordPress</li>
            <li>Integração e API</li>
            <li>Automação e IA</li>
          </ul>
        </v-col>
        <v-col cols="4">
          <div class="d-flex justify-center">
            <div class="big-icon">
              <img src="/images/marketing-digital.png" />
            </div>
          </div>
          <h3 class="service-title">Marketing Digital</h3>
          <ul class="unstyled-list">
            <li>Identidade Visual</li>
            <li>Vídeos Curtos</li>
            <li>Google Ads</li>
            <li>Facebook Ads</li>
            <li>Tiktok Ads</li>
            <li>Social Mídia</li>
            <li>Influencer Marketing</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
  `

export default {
  name: "ServicosComponent",
  template
}
