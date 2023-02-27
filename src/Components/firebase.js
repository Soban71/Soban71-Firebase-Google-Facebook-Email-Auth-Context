
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA1yGO-xJVY2SnvmE5F1pEjW0yKBmjVl6A",
  authDomain: "authentication-app-8341f.firebaseapp.com",
  projectId: "authentication-app-8341f",
  storageBucket: "authentication-app-8341f.appspot.com",
  messagingSenderId: "60718964794",
  appId: "1:60718964794:web:8e590031d5ceb15a53d503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};