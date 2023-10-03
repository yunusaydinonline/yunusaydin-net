import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import {AppJS} from './mixins/app'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const vm = new Vue({
    mixins: [AppJS],
    render: h => h(App),
}).$mount('#app');

if (window) {
    window.vm = vm;
}

window.onload = function () {
    vm.setSplashScreenOff();
    window.scrollTo(0, 0);
}

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/styles.scss'
