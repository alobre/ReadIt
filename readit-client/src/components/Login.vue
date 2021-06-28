<template>
    <div id="login">
        <v-card id="loginForm" outlined>
            <v-card-title>Login</v-card-title>
            <v-text-field v-model="email" id="email" placeholder="Email"></v-text-field>
            <v-text-field v-model="password" type="password" id="password" placeholder="Password"></v-text-field>
            <v-btn
            rounded
            color="primary"
            dark
            id="btn"
            @click="emailLogin"
            >Login</v-btn>
            <v-divider></v-divider>
            <div id="signInMethod">
            <div>Not registered yet? Sign in with...</div>
            <v-btn
            rounded
            color="primary"
            dark
            id="btn"
            @click="googleLogin()"
            >
            <v-icon>mdi-google</v-icon>
            Google
            </v-btn>
            </div>
            <v-divider></v-divider>
            <div id="register">
            <div>or Register with Email</div>
            <v-btn
            rounded
            color="primary"
            dark
            id="btn"
            to="/register"
            >
            <v-icon>mdi-account-plus</v-icon>
            Register
            </v-btn>
            </div>
        </v-card>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            emailLogin(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((data)=>{
                    console.log(data);
                    this.$router.replace("/")
                    })
            },
            googleLogin() {
                firebase.auth().onAuthStateChanged((user)=>this.login(user))
            },
            async login(user){
                const provider = await new firebase.auth.GoogleAuthProvider();
                // console.log(
                //     firebase.database().ref('users/' + 106253035330138495754).once("value").then((snapshot)=> console.log(snapshot))
                // )

                if(user){
                   console.log(user); 
                }
                else{
                firebase
                  .auth()
                  .signInWithPopup(provider)
                  .then(result => {
                    this.$router.replace("/");
                    this.user = result.additionalUserInfo.profile;  
                    console.log(this.user)
                    // this.user.images=[""];
                    // console.log(this.user.images)
                    // console.log(result);
                    this.uploadToDatabase(this.user)
                    })
                    .catch(err => {
                      alert("Oops... " + err.message);
                    });

                }
            },
            uploadToDatabase(obj){
                let db = firebase.firestore()
                db.collection('users').doc(obj.id).set(obj)
            },
        },
        mounted () {
            this.$store.state.photoURL = firebase.auth().currentUser.photoURL;
        },
    }
</script>

<style lang="scss" scoped>
html{
    height: 100%;
}
#login{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

}
#loginForm{
    padding: 1vw;
}
#signInMethod{
    margin: 1vw
}
#register{
    margin: 1vw
}
#btn{
    margin: .5vw
}
</style>