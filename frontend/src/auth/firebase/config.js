import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDy7BPmMw5q3nQavngDApiMLwgOlaaKqSo",
  authDomain: "my-app-5d5f9.firebaseapp.com",
  projectId: "my-app-5d5f9",
  storageBucket: "my-app-5d5f9.appspot.com",
  messagingSenderId: "520868084843",
  appId: "1:520868084843:web:f0107876b5f02473bf852e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
