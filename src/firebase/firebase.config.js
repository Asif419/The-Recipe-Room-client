// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIE_APIKEY,
  authDomain: import.meta.env.VIE_AUTHDOMAIN,
  projectId: import.meta.env.VIE_PROJECTID,
  storageBucket: import.meta.env.VIE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VIE_MESSAGINGSENDERID,
  appId: import.meta.env.VIE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;