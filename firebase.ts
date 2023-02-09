import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDnj_w7ia2sD9dmv0Dvx_xG9zH5K6DHhk",
  authDomain: "chatgpt-ed369.firebaseapp.com",
  projectId: "chatgpt-ed369",
  storageBucket: "chatgpt-ed369.appspot.com",
  messagingSenderId: "164479748092",
  appId: "1:164479748092:web:cb325363ae66515598d479",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
