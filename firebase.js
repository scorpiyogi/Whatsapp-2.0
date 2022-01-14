// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6be36PROuA3N1Hs5BQZAEp98xNTjnx40",
  authDomain: "whatsapp-2-3ca60.firebaseapp.com",
  projectId: "whatsapp-2-3ca60",
  storageBucket: "whatsapp-2-3ca60.appspot.com",
  messagingSenderId: "423249495830",
  appId: "1:423249495830:web:e00e6d867833fe8715b237"
}

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)


export const auth = getAuth(app)


export default { app, db, auth }
