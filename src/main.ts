import BootstrapVue from 'bootstrap-vue';
import { createApp } from 'vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';
import router from './router';

const app = createApp(App)
// Vue.use(BootstrapVue);
app.use(router)

app.mount('#app')
