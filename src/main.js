// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex/store'
import * as firebase from 'firebase'
import Vuex from 'vuex'
import {config} from './firebaseConfig'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.initializeApp(config)

const check = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    created() {
      if (user) {
        store.dispatch('autoSignIn', user)
      }
    }
  })
  check()
})
