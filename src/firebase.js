import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5y6xV0dyVeY69KQ_2BovsuCdlOT-A1bI",
  authDomain: "faking-8f099.firebaseapp.com",
  projectId: "faking-8f099",
  storageBucket: "faking-8f099.appspot.com",
  messagingSenderId: "173762380782",
  appId: "1:173762380782:web:e8f78076d5904a147284ff",
  measurementId: "G-361TMX332D",
});

const db = firebaseApp.firestore();

export { db };
