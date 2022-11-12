// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEWwk2S-P5DLPcU137dxXWlNlfMwy_2M0",
    authDomain: "chat-app-47c63.firebaseapp.com",
    projectId: "chat-app-47c63",
    storageBucket: "chat-app-47c63.appspot.com",
    messagingSenderId: "688581312494",
    appId: "1:688581312494:web:8bb5ec80a908d47a0698ff",
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
