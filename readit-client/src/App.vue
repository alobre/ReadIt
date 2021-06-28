<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link>
    </div> -->
    <v-app-bar
      color="deep-purple accent-4"
      id="appbar"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-row id="row">
      <v-col cols="3" lg="1" md="2" sm="2">
        <v-img src="./assets/ReadIt.png" contain id="logo" ></v-img>
      </v-col>
      <!-- <v-toolbar-title>ReadIt</v-toolbar-title> -->

      <v-spacer></v-spacer>

      
      <!-- <v-btn icon to="/login">
        <v-icon>mdi-login</v-icon>
      </v-btn> -->
      <!-- <LoginOrLogout></LoginOrLogout> -->
      <!-- <LoginIcon/>
      <LogoutIcon/> -->
      <!-- <v-col id="iconCol" offset="10"><LoginOrLogout/></v-col> -->
      <!-- <div id="iconsParent"> -->
        <LoginOrLogout id="icons" class="float-end"/>
      <!-- </div> -->
      </v-row>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
// import LoginIcon from './components/LoginIcon.vue'
// import LogoutIcon from './components/LogoutIcon.vue'
import LoginOrLogout from './components/LoginOrLogout'
  export default {
    components: {
      // LoginIcon,
      // LogoutIcon,
      LoginOrLogout
    },
    data() {
      return {
        item: false
      }
    },
    methods: {
      state(){
        firebase.auth().currentUser.uid ? this.$store.state.loggedIn = true : this.$store.state.loggedIn = false
      },
      mounted () {
        this.state();
      },
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
#row{
  width: 98vw
}
#appbar{
  display: flex;
  // justify-content: flex-end;
}
#iconsParent{
  display: flex;
  justify-content: flex-end;
}
#icons{
  display: flex;
  align-self: center;
  // justify-content: flex-end;
}
.invisible{
  display: none;
}
.visible{
  display: initial;
}
</style>
