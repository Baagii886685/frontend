import Vue from 'vue';
import * as Vue2Leaflet from 'vue2-leaflet'; // VALID
// import * as VueGoogleMaps from 'vue2-google-maps';

import Element from 'element-ui';
import App from './App.vue';
import store from './store';
import router from './router';
import 'leaflet/dist/leaflet.css';
import '@/style/index.less';
import '@/assets/main.css';

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'c2989dc1e5bbc8c4597b12ef32fe1d7c6945521a',
//     libraries: 'places',
//   },
// });
Vue.use(Vue2Leaflet);
Vue.use(Element);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
