<template>
  <div class="register">
    <v-card id="registerForm" outlined>
            <v-card-title>Register</v-card-title>
            <v-text-field v-model="email" id="email" placeholder="Email"></v-text-field>
            <v-text-field v-model="password1" type="password" id="password" placeholder="Password"></v-text-field>
            <v-text-field v-model="password2" type="password" id="password" placeholder="Password"></v-text-field>
            <v-btn
            rounded
            color="primary"
            dark
            id="btn"
            @click="register()">Register</v-btn>
            <v-btn
            rounded
            color="primary"
            dark
            id="btn"
            @click="test()">test</v-btn>
        </v-card>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password1: "",
        password2: ""
      },
      error: null
    };
  },
  methods: {
    test(){
      console.log(firebase.auth().currentUser);
    },
    register() {
      if(this.email && this.password1 && this.password2){
        if(this.password2 == this.password1){
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password1)
          .then(data => {
            this.setUserData(data.user);
          })
          .catch(err => {
            this.error = err.message;
          });
        } else {
          alert('Passwords do not match')
        } 
      }
    },
    setUserData(userData){
      console.log(userData);
      let db = firebase.firestore()
      db.collection('users')
      .doc(userData.uid).set({userData})
    }
  }
};
</script>

<style lang="scss" scoped>
#register{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
#registerForm{
    width: 30vw;
    padding: 1vw;
    display: inline-block;
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