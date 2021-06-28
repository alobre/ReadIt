<template>
    <div>
        <v-avatar id='avatar' @click='logout()'>
            <img id='pb' :src='this.photoURL'>
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
                this.$router.push('/')
            }
        },
        mounted () {
            console.log(firebase.auth().currentUser);
            this.photoUrl = firebase.auth().currentUser.photoURL;
        },
    }
</script>

<style lang="scss" scoped>

</style>