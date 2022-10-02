
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpSDx7pFwpZ1OUDA6ubLUo9NCK1lxUbuM",
  authDomain: "fir-testing-c566c.firebaseapp.com",
  projectId: "fir-testing-c566c",
  storageBucket: "fir-testing-c566c.appspot.com",
  messagingSenderId: "269625305373",
  appId: "1:269625305373:web:0bd335959a7530cdbc19f4",
  measurementId: "G-0RXBSEDV14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app , analytics} 