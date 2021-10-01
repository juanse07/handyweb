import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC_QVLN1m1tabUYtM-ThQobLWNxAuO15aM",
    authDomain: "web-1-bd9f8.firebaseapp.com",
    projectId: "web-1-bd9f8",
    storageBucket: "web-1-bd9f8.appspot.com",
    messagingSenderId: "466647077880",
    appId: "1:466647077880:web:dfe163f67fa7bbab89fc0d",
    // measurementId: "G-28C3LJ7Y1Q"
  };


  const firebase= Firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
export {firebase,db};