// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSB8HTBZdfl349r1wcRrkAVKUEg0H0zzI",
  authDomain: "consulto-f240a.firebaseapp.com",
  projectId: "consulto-f240a",
  storageBucket: "consulto-f240a.firebasestorage.app",
  messagingSenderId: "186991759918",
  appId: "1:186991759918:web:eb365d43900aceb45e85bf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInAnonymously };
