import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import store from './store/store'

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);
app.mount('#app');
