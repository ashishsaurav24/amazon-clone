import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDccILsAPwyG2TJhhOZvQhpkerEAoY_aO4",
    authDomain: "clone-af20a.firebaseapp.com",
    projectId: "clone-af20a",
    storageBucket: "clone-af20a.appspot.com",
    messagingSenderId: "631164360914",
    appId: "1:631164360914:web:e5665a873cc6baf664350b",
    measurementId: "G-VRRSZ2LGD6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }


// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDccILsAPwyG2TJhhOZvQhpkerEAoY_aO4",
//     authDomain: "clone-af20a.firebaseapp.com",
//     projectId: "clone-af20a",
//     storageBucket: "clone-af20a.appspot.com",
//     messagingSenderId: "631164360914",
//     appId: "1:631164360914:web:e5665a873cc6baf664350b",
//     measurementId: "G-VRRSZ2LGD6"
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth }