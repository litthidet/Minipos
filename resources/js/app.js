import { create } from 'lodash';
import { createApp } from 'vue';
import App from './App.vue';
require('./bootstrap');

const app =createApp(App)
app.mount("#myApp")

