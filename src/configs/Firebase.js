import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, } from 'firebase/auth';
import { doc, setDoc, collection, addDoc ,getFirestore, getDoc, query, where } from "firebase/firestore"; 
import { getStorage, ref,uploadBytes,  getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnCmf-C4iTsCqtnSFmzqXyHCHnX53-yMc",
    authDomain: "newhackathon-ee524.firebaseapp.com",
    projectId: "newhackathon-ee524",
    storageBucket: "newhackathon-ee524.appspot.com",
    messagingSenderId: "390100367029",
    appId: "1:390100367029:web:d105b1ec52c9b89d4e30fc"
  };
  signInWithEmailAndPassword, createUserWithEmailAndPassword

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const storageRef = ref(storage);

export {
auth,
signInWithEmailAndPassword, 
createUserWithEmailAndPassword,
onAuthStateChanged, 
doc,
setDoc, 
db,
collection, 
addDoc ,
storage,
storageRef,
uploadBytes ,
getDownloadURL,
ref,
getDoc,
query, where

}