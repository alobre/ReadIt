<template>
<v-file-input :disabled="idDisabeled" @change="storeFile" label="File input" prepend-icon="mdi-camera"></v-file-input>
    <!-- <v-card id="FileDragDrop"
    @dragenter="OnDragEnter"
    @dragleave="OnDragLeave"
    @dragover.prevent
    @drop="onDrop"
    :class="{dragging: isDragging}"
    >
    <div v-show="!images.length">
        <div id="uploadIcons">
          <v-btn icon>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <v-btn icon @click="assignImageToUser(1,1)">
            <v-icon>mdi-file-upload</v-icon>
          </v-btn>
          <v-file-input @change="storeFile" label="File input" prepend-icon="mdi-camera"></v-file-input>
        </div>
    </div>
    
    <div id="imagePreview" v-show="images.length">
        <div id="imageWrapper" v-for="(image, index) in images" :key="index">
            {{
                    console.log(image)
            }}
            <v-img :src="image"></v-img>
                <div id="details">
                    <span id="name" v-text="files[index].name"></span>
                    <span id="size" v-text="files[index].size"></span> -->
                <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
    <!-- </v-card> -->
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
    export default {
        data() {
            return {
                dragCount: 0,
                isDragging: false,
                files:[],
                images:[],
                file: {},
                imgName: '',
                ocrText: '',
                isDisabeled: true
            }
        },
        methods: {
            OnDragEnter(e){
                e.preventDefault()
                this.isDragging = true
                this.dragCount++
            },
            OnDragLeave(e){
                e.preventDefault()
                
                this.dragCount--
                if(this.dragCount <= 0)this.isDragging = false
            },
            onInputChange(e){
                console.log(e);
            },
            onDrop(e) {
                console.log(e);
                e.preventDefault();
                e.stopPropagation()
                this.isDragging = false
                const files = e.dataTransfer.files
                files.forEach(file => {
                    this.addImage(file)
                });
            },  
            addImage(file){
                file.type.match('image.*') ? this.images.push(file) : console.log('You can only upload Images');
                this.assignImageToUser()
                // file.type.match('image.*') 
                // const img = new Image(),
                //     reader = new FileReader()

                // reader.onload = (e) => this.images.push(e.target.result)
                // reader.readAsDataURL(file)
            },
            test(){
                this.upload()
            },
            storeFile(files) {  
                this.file = files;
                this.fileName = `${
                firebase.auth().currentUser.providerData[0].uid
                }-${new Date().getTime()}.jpg`
                console.log(this.fileName);
                this.upload(this.assignImageToUser)
            },
            assignImageToUser(imageURL, ocrText) {
                this.$store.state.ocrText = ocrText
                this.$store.state.imgSrc = imageURL
            // if (firebase.auth().currentUser && this.file.type == "image/png" || firebase.auth().currentUser && this.file.type == "image/jpeg") {
                let db = firebase.firestore()
                db.collection('users')
                .doc(firebase.auth().currentUser.providerData[0].uid)
                .get().then(data => {
                    console.log(data.data(), imageURL, ocrText);

                    let ocrArr = []
                    if(data.ocr){
                        ocrArr = data.ocr.push({imageURL, ocrText})
                    } else {
                        ocrArr = [{imageURL, ocrText}]
                    }
                    console.log(ocrArr);
                    db.collection('users')
                    .doc(firebase.auth().currentUser.providerData[0].uid)
                    .update('ocr', ocrArr)
                })
            // }
            },
            async upload(assignImageToUser) {
                this.isDisabeled = true;
                let storageRef = firebase.storage().ref();
                var mountainImagesRef = storageRef.child("images/" + this.fileName);
                mountainImagesRef.put(this.file).then(function(res) {
                    storageRef.child(res.ref.fullPath).getDownloadURL().then(async url=>{
                        let ocr = await axios.post('http://localhost:3000/ocr', {url})
                        assignImageToUser(url, ocr.data)
                        this.isDisabeled = false;
                    })
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
#FileDragDrop{
    height: 500px;
    width: 500px;
    background-color: grey;

    &.dragging{
        background: #fff;
        color: blue;
        border: 3px dashed blue;
        
        #fileInput{
            color:blue;
            background: #fff

        }
    }
}
</style>