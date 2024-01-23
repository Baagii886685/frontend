import Vue from 'vue';



// import * as VueGoogleMaps from 'vue2-google-maps';


// import './vue2-google-maps';
import 'bulma/css/bulma.css';
import moment from 'moment';

import * as Vue2Leaflet from 'vue2-leaflet'; // VALID


// import { placeInputImpl } from 'vue2-google-maps/dist/components/placeInputImpl';

import axios from 'axios';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import App from './App.vue';
import store from './store';
import router from './router';
import 'leaflet/dist/leaflet.css';
import '@/style/index.less';
import '@/assets/main.css';
import DateFormattingPlugin from './dateFormatting';
// import 'https://fonts.googleapis.com/css?family=Lato:100&display=swap';


// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyAii0BtC5ZauNuUp3vhEqrVnjl3TsRkS2E',
//     // libraries: 'places',
//   },
// });


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.prototype.$moment = moment;

Vue.use(Vue2Leaflet);

// Vue.use(placeInputImpl);
Vue.use(Element, { locale });
Vue.use(DateFormattingPlugin);
// Vue.config.globalProperties.$filters = {
//   formatDate(value) {
//     return moment(value).format("YYYY-MM-DD HH:mm:ss");
//   },
// };
// Vue.use(VueGoogleMaps, {
//   load: {
//     // key: 'AIzaSyAii0BtC5ZauNuUp3vhEqrVnjl3TsRkS2E',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//
//   },
//   // installComponents: true
// });
Vue.filter('formatDate', function (value, format = 'YYYY-MM-DD HH:mm:ss') {
  if (value) {
    return moment(String(value)).format(format);
  }
  return '';
});





new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
