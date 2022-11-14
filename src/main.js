import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
// import './assets/theme-dark/index.css';
// import './assets/theme-dark/vars.css';
// import './assets/theme-dark/style.css';

import lang from "element-ui/lib/locale/lang/en";
import locale from 'element-ui/lib/locale';

// import './assets/main.css';
 
locale.use(lang);
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');