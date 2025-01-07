import { createApp } from 'vue';
import { ApiClient } from './api/api-client';
import App from './App.vue';
import './assets/index.css';
import { router } from './router';

export const apiClient = new ApiClient('https://attendme-backend.runasp.net');

createApp(App).use(router).mount('#app');
