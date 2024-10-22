// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVNSfGRisd_gncQzJIIB_bqXlUwP_b6cM",
    authDomain: "auth-concepts.firebaseapp.com",
    projectId: "auth-concepts",
    storageBucket: "auth-concepts.appspot.com",
    messagingSenderId: "623937364737",
    appId: "1:623937364737:web:6d9f6c226a1d8553163100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;