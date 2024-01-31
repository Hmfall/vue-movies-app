import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './providers/router';

const app = createApp(App);
const pinia = createPinia();

app.use(VueQueryPlugin);
app.use(router);
app.use(pinia);

app.mount('#App');
