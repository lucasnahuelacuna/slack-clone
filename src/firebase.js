import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMQCHLPMWJgpmbIGoDVICLbMH4ZGiWkNE",
    authDomain: "slack-clone-d2d64.firebaseapp.com",
    projectId: "slack-clone-d2d64",
    storageBucket: "slack-clone-d2d64.appspot.com",
    messagingSenderId: "427968661861",
    appId: "1:427968661861:web:eceea276c8248789e7b98c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }