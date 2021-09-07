import Vue from 'vue'
import App from './App.vue'
import {s1, s2} from './mixin'

Vue.config.productionTip = false
Vue.mixin(s1)
Vue.mixin(s2)

new Vue({
    render: h => h(App),
}).$mount('#app')
