<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link>
    </div> -->
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>ReadIt</v-toolbar-title>

      <v-spacer></v-spacer>

      
      <!-- <v-btn icon to="/login">
        <v-icon>mdi-login</v-icon>
      </v-btn> -->
      <!-- <LoginOrLogout></LoginOrLogout> -->
      <LoginIcon/>
      <LogoutIcon/>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import LoginIcon from './components/LoginIcon.vue'
import LogoutIcon from './components/LogoutIcon.vue'
// import LoginOrLogout from './components/LoginOrLogout'
  export default {
    components: {
      LoginIcon,
      LogoutIcon
    },
    data() {
      return {
        item: ''
      }
    },
    methods: {
      state(){
        firebase.auth().currentUser.uid ? this.item = LoginIcon : this.item = LogoutIcon
      }
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.invisible{
  display: none;
}
.visible{
  display: initial;
}
</style>
