import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import 'vuetify/styles'
import './assets/css/style.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

const app = createApp(App)
app.component('QuillEditor', QuillEditor);
app.use(router)
app.use(vuetify)
app.mount('#app')
