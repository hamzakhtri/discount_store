import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {uploadBytes, ref, getStorage, getDownloadURL} from 'firebase/storage'
import {
    getFirestore,
    doc,
    setDoc,
    // addDoc,
    collection,
    // query,
    // getDoc,
    getDocs,
    // DocRef,
    // deleteDoc,
  } from "firebase/firestore";

  

const firebaseConfig = {
  apiKey: "AIzaSyBWqEQ3Otp4BuXF4QCbRFVrnSImZE_ciCc",
  authDomain: "discount-store-3986f.firebaseapp.com",
  projectId: "discount-store-3986f",
  storageBucket: "discount-store-3986f.appspot.com",
  messagingSenderId: "974057196789",
  appId: "1:974057196789:web:0e3d0c0b3d17c572e249bc"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const addUserToDBSignup = async (fullName, contact) => {
  const uid = auth.currentUser.uid;
  var userProfile = { email: "", fullName: "", contact: "" };
  userProfile.email = auth.currentUser.email;
  userProfile.fullName = fullName;
  userProfile.contact = contact;

  return setDoc(doc(db, "users", uid), userProfile);
};





  

export {
    auth,
    createUserWithEmailAndPassword,
    addUserToDBSignup,
    collection,
    getDocs,
    signInWithEmailAndPassword,
    db,getDownloadURL, storage, uploadBytes, doc,setDoc, ref, signOut
  };
