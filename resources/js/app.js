require('./bootstrap');
import VueTables from 'vue-tables-2';
import Vue from 'vue';
Vue.use(VueTables.ClientTable);

import excel from 'vue-excel-export' 
Vue.use(excel)




window.Vue = require('vue');
Vue.component(
	'countries', 
	 require('./components/countries.vue').default
);

Vue.component(
	'export', 
	 require('./components/export.vue').default
);



const app = new Vue({
    el: '#app',

});