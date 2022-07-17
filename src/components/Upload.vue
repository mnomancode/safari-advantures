<template>
  <div>
    <div >
        <br>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input  @change="previewImage"  class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">

      
      <!-- <input type="file" @change="previewImage" accept="image/*" >                 -->
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">                     
        <img class="preview" :src="picture">
        <br>
      <!-- <button @click="onUpload">Upload</button> -->
    </div>   
  </div>
</template>



<script>
// import { file } from "@babel/types";
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
 
export default {
  name: 'Upload',
  data(){	  
	return{
      imageData: null,  
      picture: null,
      uploadValue: 0
	}
  },
  methods:{

     

    previewImage(event) {
      console.log(event.target.files[0]);

      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];

      this.onUpload();
    },
 
    onUpload(){
      // alert(this.imageData);
const storage = getStorage();
const storageRef = ref(storage, 'uploads/' + this.imageData.name);
const uploadTask = uploadBytesResumable(storageRef, this.imageData);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + this.uploadValue + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error);
    
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
        this.$emit('imagePath', downloadURL);

      // alert(downloadURL);
    });
  }
);



// uploadBytes(storageRef, this.imageData).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
//   this.uploadValue= (snapshot.bytesTransferred / snapshot.totalBytes) * 100


//   console.log(snapshot.downloadURL);
// }).catch((error) => {
//   console.log('Error uploading file: ',error);
//   // alert(error);
// });


    


      
    } 
  
  }
}
</script>

<style scoped="">
img.preview {
    width: 200px;
}
 
</style>