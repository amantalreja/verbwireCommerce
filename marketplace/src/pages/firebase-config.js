import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1oMB4IsowXQIAnjyDrxf_7nssRQ9-vV8",
    authDomain: "verbwirecommerce.firebaseapp.com",
    databaseURL: "https://verbwirecommerce-default-rtdb.firebaseio.com",
    projectId: "verbwirecommerce",
    storageBucket: "verbwirecommerce.appspot.com",
    messagingSenderId: "220099843757",
    appId: "1:220099843757:web:adb98de75fc85baa5f9824",
    measurementId: "G-R1LVQW6PPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);