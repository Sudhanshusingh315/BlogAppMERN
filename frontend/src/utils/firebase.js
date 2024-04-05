// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALMv5rlWxEtFyhISBRHBVuExxBPhSgtX8",
  authDomain: "blogapplication-3c790.firebaseapp.com",
  projectId: "blogapplication-3c790",
  storageBucket: "blogapplication-3c790.appspot.com",
  messagingSenderId: "365933076492",
  appId: "1:365933076492:web:d13b468552c33f10c10e29",
  measurementId: "G-WSN1VK22HG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);