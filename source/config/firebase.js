/**
 * Initializes Firebase
 */

import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClxJkjbdcO1EBuQgbtELOenQmBxElNF6k",
    authDomain: "airbnb-clone-20402.firebaseapp.com",
    projectId: "airbnb-clone-20402",
    storageBucket: "airbnb-clone-20402.appspot.com",
    messagingSenderId: "702193278016",
    appId: "1:702193278016:web:6ae45a87692548ff0d13a5",
    measurementId: "G-BFSVNGXN3H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
