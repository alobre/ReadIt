<template>
  <div>
    <LogoutIcon id="logoutIcon" v-bind:class="[userState ? 'visible' : 'invisible']"></LogoutIcon>
    <LoginIcon id="loginIcon" v-bind:class="[userState ? 'invisible' : 'visible']"></LoginIcon>
    
  </div>
</template>

<script>
import firebase from 'firebase'
import LoginIcon from './LoginIcon'
import LogoutIcon from './LogoutIcon'

  export default {
    components: {
      LoginIcon,
      LogoutIcon
    },
    data() {
    return {
      userState: false
    }
  },
    methods: {
      state() {
        console.log('LOGGEDIN: ', firebase.auth().currentUser);
        firebase.auth().currentUser.uid ? this.userState = true : this.userState = false
      },
  },
  created() {
    this.state();
  },
  mounted() {
      this.state();
  },
}
</script>

<style lang="scss" scoped>
#avatar{
  border-radius: 100;
  width: 1vw;
}
#pb{
  border-radius: 100;
  width: 1vw;
}
.invisible{
  display: none;
}
.visible{
  display: initial;
}
</style>