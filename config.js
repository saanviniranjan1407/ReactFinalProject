import firebase from 'firebase';
require ( '@firebase/firestore' );

var firebaseConfig = {
    apiKey: "AIzaSyA4-PrnJK5v4JegkstCtRAimvt34sJd844",
    authDomain: "caters-you.firebaseapp.com",
    projectId: "caters-you",
    storageBucket: "caters-you.appspot.com",
    messagingSenderId: "38020444131",
    appId: "1:38020444131:web:0ce905582d41125ff8bad6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();