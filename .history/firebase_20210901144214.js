import firebase from "firebase";

const firebaseConfig = {
          apiKey: "AIzaSyBvOs9qlCAp2DD_hgNgI5CiMhcWnv3207Q",
          authDomain: "disneyprojectt.firebaseapp.com",
          projectId: "disneyprojectt",
          storageBucket: "disneyprojectt.appspot.com",
          messagingSenderId: "1029678655704",
          appId: "1:1029678655704:web:73956574332e73a32e4fad"
        };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app        