import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjcI801eMc2NcIvnfgRG4lO0oVqJ4WM1o",
  authDomain: "tienda-online-4f6f8.firebaseapp.com",
  projectId: "tienda-online-4f6f8",
  storageBucket: "tienda-online-4f6f8.appspot.com",
  messagingSenderId: "494560806447",
  appId: "1:494560806447:web:936ecd92f819d602d5a8da"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db