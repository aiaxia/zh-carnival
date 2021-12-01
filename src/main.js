import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'vant/lib/index.css';
import './common.css';

import Vue from 'vue';
//引入组件
import vueEsign from 'vue-esign';
createApp(App).use(store).use(router).use(vueEsign).mount('#app')
