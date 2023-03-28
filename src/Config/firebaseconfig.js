// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOpYAIv4HKj5pLlCvFIfITJFM1g08C4rs",
  authDomain: "admindashboard-35231.firebaseapp.com",
  projectId: "admindashboard-35231",
  storageBucket: "admindashboard-35231.appspot.com",
  messagingSenderId: "796653566352",
  appId: "1:796653566352:web:15db6ce003a7781143db15",
  measurementId: "G-D24SY6JK2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;