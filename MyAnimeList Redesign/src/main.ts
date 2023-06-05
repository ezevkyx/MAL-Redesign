import Vue,{ createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vuetify/styles';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from 'router';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'


createApp(App)
.use(VueAxios,axios)

.use(i18n)
.use(router)
.use(vuetify)
.mount('#app')
