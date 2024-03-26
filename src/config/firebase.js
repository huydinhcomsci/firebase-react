// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBits6XL_ufH5RAKvTNfgavsi_9syLdsjA",
    authDomain: "hospital-management-syst-93fcd.firebaseapp.com",
    databaseURL: "https://hospital-management-syst-93fcd-default-rtdb.firebaseio.com",
    projectId: "hospital-management-syst-93fcd",
    storageBucket: "hospital-management-syst-93fcd.appspot.com",
    messagingSenderId: "293818708055",
    appId: "1:293818708055:web:22e95a33e3531e4759b312",
    measurementId: "G-7EBLXTW1B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);