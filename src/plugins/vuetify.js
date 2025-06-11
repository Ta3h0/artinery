// src/plugins/vuetify.js
import 'vuetify/styles'                     // Vuetify 기본 스타일
import '@mdi/font/css/materialdesignicons.css'  // MDI 아이콘 폰트

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives  from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})