// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLgl3MAM-pZK4pd5iWiFxS85E1ghEdfu8",
    authDomain: "ema-john-simple-7d9db.firebaseapp.com",
    projectId: "ema-john-simple-7d9db",
    storageBucket: "ema-john-simple-7d9db.appspot.com",
    messagingSenderId: "822333473668",
    appId: "1:822333473668:web:8215c79a9204ca0b05d3d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;