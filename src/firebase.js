import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-6wZLJNNgRA1j8uwryI0HJQgFp7rCahM",
  authDomain: "slack-clone-318a5.firebaseapp.com",
  projectId: "slack-clone-318a5",
  storageBucket: "slack-clone-318a5.appspot.com",
  messagingSenderId: "566764549313",
  appId: "1:566764549313:web:83cc35df3e9e906d005040",
  measurementId: "G-MN6R00MXFH",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
