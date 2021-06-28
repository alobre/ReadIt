<template>
    <div>
        <v-avatar id='avatar' @click='logout()'>
            <img id='pb' :src='this.$store.state.photoURL'>
        </v-avatar>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        data() {
            return {
                photoUrl: '',
                img: ''
            }
        },
        methods: {
            logout() {
                firebase.auth().signOut().then(()=>console.log('loggedOut'))
                firebase.auth().currentUser.uid ? this.$store.state.loggedIn = true : this.$store.state.loggedIn = false
                this.$router.push('/')
            }
        },
        mounted () {
            console.log(firebase.auth().currentUser);
            this.$store.state.photoURL = firebase.auth().currentUser.photoURL;
        },
    }
</script>

<style lang="scss" scoped>

</style>