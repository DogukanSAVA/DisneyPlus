import firebase from "firebase";

const firebaseConfig = {
          apiKey: "AIzaSyBH6EFrwncWfMTMRGx45H2IwnW5atflFEM",
          authDomain: "disne-dce35.firebaseapp.com",
          projectId: "disne-dce35",
          storageBucket: "disne-dce35.appspot.com",
          messagingSenderId: "962076363016",
          appId: "1:962076363016:web:397bcf2a2200daf21744bd"
        };

 const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(firebaseConfig)
 firebase.app();    
 
 const db = app.firestore()

 export { db };  