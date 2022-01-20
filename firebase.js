import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA6be36PROuA3N1Hs5BQZAEp98xNTjnx40",
  authDomain: "whatsapp-2-3ca60.firebaseapp.com",
  projectId: "whatsapp-2-3ca60",
  storageBucket: "whatsapp-2-3ca60.appspot.com",
  messagingSenderId: "423249495830",
  appId: "1:423249495830:web:e00e6d867833fe8715b237"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }
