import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBE3Hp6r_p3VRMIM_5MqvnpE0vplA5VIaw",
  authDomain: "readit-c6dea.firebaseapp.com",
  projectId: "readit-c6dea",
  storageBucket: "readit-c6dea.appspot.com",
  messagingSenderId: "143865438178",
  appId: "1:143865438178:web:9fab41cefef7e5b3b5e3bb"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
