// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATtieoLHQ2qn8fRVlYQ9diDPktzJWISUM",
  authDomain: "it35-cagubcub-81800.firebaseapp.com",
  projectId: "it35-cagubcub-81800",
  storageBucket: "it35-cagubcub-81800.appspot.com",
  messagingSenderId: "1054627829175",
  appId: "1:1054627829175:web:efd9305a699c3b95ee8432",
  measurementId: "G-67XJWNW251"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{db}