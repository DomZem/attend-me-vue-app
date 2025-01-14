import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { VueQrcodeReader } from 'vue-qrcode-reader';
import { ApiClient } from './api/api-client';
import App from './App.vue';
import './assets/index.css';
import { router } from './router';

export const apiClient = new ApiClient('https://attendme-backend.runasp.net');

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(VueQrcodeReader).mount('#app');
