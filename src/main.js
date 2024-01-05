import Vue from 'vue';

import 'bulma/css/bulma.css';
import moment from 'moment';

import * as Vue2Leaflet from 'vue2-leaflet'; // VALID
// import * as VueGoogleMaps from 'vue2-google-maps';
import axios from 'axios';
import Element from 'element-ui';
import App from './App.vue';
import store from './store';
import router from './router';
import 'leaflet/dist/leaflet.css';
import '@/style/index.less';
import '@/assets/main.css';

Vue.prototype.$axios = axios;

Vue.prototype.$moment = moment;

Vue.use(Vue2Leaflet);
Vue.use(Element);

// App.config.globalProperties.$filters = {
//   formatDate(value) {
//     return moment(value).format("YYYY-MM-DD HH:mm:ss");
//   },
// };
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
