import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';


export default {
  apiKey: "AIzaSyDMXPev4HLlLT8O314ABR33NqjqgIdr5BQ",
  authDomain: "vurgerkuin.firebaseapp.com",
  databaseURL: "https://vurgerkuin.firebaseio.com",
  projectId: "vurgerkuin",
  storageBucket: "vurgerkuin.appspot.com",
  messagingSenderId: "641952554912",
  appId: "1:641952554912:web:2ccffd0d20445b8ed38ec5",
  measurementId: "G-65GX98F9T6"
}

firebase.initializeApp({
  apiKey: "AIzaSyDMXPev4HLlLT8O314ABR33NqjqgIdr5BQ",
  authDomain: "vurgerkuin.firebaseapp.com",
  databaseURL: "https://vurgerkuin.firebaseio.com",
  projectId: "vurgerkuin",
  storageBucket: "vurgerkuin.appspot.com",
  messagingSenderId: "641952554912",
  appId: "1:641952554912:web:2ccffd0d20445b8ed38ec5",
  measurementId: "G-65GX98F9T6"
});

export let data = firebase.firestore();