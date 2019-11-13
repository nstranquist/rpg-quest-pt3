import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCUWGVSSzUCADbCMiNHoD4bKKXhWSo4eXw",
  authDomain: "rpg-quest-4174a.firebaseapp.com",
  databaseURL: "https://rpg-quest-4174a.firebaseio.com",
  projectId: "rpg-quest-4174a",
  storageBucket: "rpg-quest-4174a.appspot.com",
  messagingSenderId: "925619050657",
  appId: "1:925619050657:web:756f37fd629f3fd61238e0",
  measurementId: "G-38VGXRHC25"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export const firestore = firebase.firestore()
export const auth = firebase.auth()