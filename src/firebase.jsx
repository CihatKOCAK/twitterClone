// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkMIaCPTQ77VLG3ehPbjozF7JKJCXGoE",
  authDomain: "twitter-clone-react-f5b39.firebaseapp.com",
  projectId: "twitter-clone-react-f5b39",
  storageBucket: "twitter-clone-react-f5b39.appspot.com",
  messagingSenderId: "388064416305",
  appId: "1:388064416305:web:5c2194d31e3f74250a3b10",
  measurementId: "G-14ZK3YZ9RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);