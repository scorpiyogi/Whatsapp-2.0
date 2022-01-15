import "../styles/globals.css"
import { useAuthState } from "react-firebase-hooks/auth"
import Login from "./login"
import firebase from "firebase/app"
import { auth, db } from "../firebase"
import Loading from "../components/Loading"
import { useEffect } from "react"
import { updateDoc, serverTimestamp } from "firebase/firestore"
import * as firestore from "firebase/firestore"
//import * as from "firebase/firestore"

//import { updateDoc, serverTimestamp } from "firebase/firestore";

//firestoreconst docRef = doc(db, 'objects', 'some-id');

// Update the timestamp field with the value from the server
//const updateTimestamp = await updateDoc(docRef, {
//timestamp: serverTimestamp()
//});

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  useEffect(async () => {
    if (user) {
      const usersRef = firestore.collection(db, "users")
      await firestore.setDoc(
        firestore.doc(usersRef, user.uid),
        {
          email: user.email,
          lastSeen: firestore.serverTimestamp(),
          photoURL: user.photoURL
        },
        { merge: true }
      )
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
