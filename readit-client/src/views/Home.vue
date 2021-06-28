<template>
  <div class="home">
    <div id="cards">
      
      <!-- <v-card id="card">
        <div id="uploadIcons">
          <v-btn icon>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-file-upload</v-icon>
          </v-btn>
        </div>
      </v-card> -->
      <v-card id="card">
        <div id="textAndImg">
          <div id="textAreaDiv">
            <v-textarea
            id="textArea"
            solo
            name="input-7-4"
            height="65vh"
            no-resize
            loading
            :value="this.$store.state.ocrText"
          ></v-textarea>
        </div>
        <!-- <v-img id="img" contain :src="this.$store.state.imgSrc"/> -->
        </div>
        
      <FileDragDrop id="fileInput"/>
      </v-card>
       <v-overlay
          :absolute="absolute"
          :value="this.$store.state.loading"
        >
        <v-progress-circular
        indeterminate
        size="64"
        ></v-progress-circular>
        </v-overlay>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import FileDragDrop from '../components/FileDragDrop.vue'
export default {
  components: {
    FileDragDrop
  },

  mounted () {
    firebase.auth().currentUser.uid ? this.$store.state.loggedIn = true : this.$store.state.loggedIn = false
  },
}
</script>

<style scoped>
#cards{
  display: flex;
  /* justify-content: space-around; */
  margin-top: 2vw;
  margin-left: 5vw;
  margin-right: 5vw;
}

#card{
  width: 100vw;
  height: 80vh;
  padding: 1vw;
  /* display: flex; */

  /* margin: 5vw; */
}
#textAndImg{
  display: flex;

}
#img{
  height: 20vw;
  width: 30vw;
}
#textAreaDiv{
  width: 100vw;
}
#textArea{
  /* height: 100vh */
  width: 80vw;
}
#uploadIcons{
  height:100%;
  display: flex;
  justify-content: center;
  /* flex-flow: column; */
  /* align-self: center; */
  align-items: center;
}
#fileInput{
  margin-bottom: 1vw;
}
</style>
