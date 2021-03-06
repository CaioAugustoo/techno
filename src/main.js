import Vue from 'vue';
import App from './App.vue';
import Format from './utils/Format.vue';

import store from './store';

Vue.config.productionTip = false;

Vue.component('Format', Format);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
