import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ocrText: '',
    imgSrc: '',
    loading: false,
    loggedIn: false,
    photoURL: ''
  },
  mutations: {
  },
  actions: {
    // setOcrText(context, )
  },
  modules: {
  }
})
