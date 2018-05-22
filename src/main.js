// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import vuex from 'vuex'
Vue.use(vuex);

var store = new vuex.Store({//store对象
  state: {
    states: 'turn-on'
  },
  mutations: {
    setTransition(state, states) {
      state.states = states
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
