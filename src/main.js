import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import {setCookie, getCookie, delCookie} from "./assets/login/cookie";


Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.use(ViewUI)
unescape(getCookie('username'))
Vue.prototype.$cookieStore = {
    setCookie,
    getCookie,
    delCookie
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
