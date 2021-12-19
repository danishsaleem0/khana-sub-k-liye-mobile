import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,  signOut  } from "firebase/auth"
import { getFirestore , doc, setDoc, getDoc,collection, query, where,addDoc, getDocs} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCnCmf-C4iTsCqtnSFmzqXyHCHnX53-yMc",
  authDomain: "newhackathon-ee524.firebaseapp.com",
  projectId: "newhackathon-ee524",
  storageBucket: "newhackathon-ee524.appspot.com",
  messagingSenderId: "390100367029",
  appId: "1:390100367029:web:d105b1ec52c9b89d4e30fc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    onAuthStateChanged,
    doc,
    setDoc,
    collection,
    getDoc,
    db,
}