import Vue from 'vue';
import App from './App.vue';
import 'animate.css'
import 'normalize.css';
import router from '@/router'

// SPA Single Page Application
// Web应用不刷新加载页面 更像App 更像Pc应用

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
