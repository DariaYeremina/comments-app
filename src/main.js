import Vue from 'vue';
import i18n from '@/translation/i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/veevalidate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
